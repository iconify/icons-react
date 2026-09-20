import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ffw_pwyfz {
  d: path("M12.62 3.5a7 7 0 1 1 -5.24 0");
}

.kfdmhd64i {
  d: path("m15 15 6 6");
}

.plw-owhdh {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12.62 3.5a7 7 0 1 1 -5.24 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qzusxgb0b {
  d: path("m7 10 2 2 4 -4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vrdrrjbvk {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m7 10 2 2 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yjc9h6oua {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m15 15 6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="plw-owhdh"/><path class="yjc9h6oua"/><path class="vrdrrjbvk"/><path class="ffw_pwyfz"/><path class="kfdmhd64i"/><path class="qzusxgb0b"/></g>`,
		"fallback": "iconmind:recall-at-k-duotone-bold",
	});
}

export default Component;
