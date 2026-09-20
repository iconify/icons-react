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
		"content": `<style>.b6e35tlvq {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cohvj-bxo {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 4h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gop02zbrx {
  d: path("M8 4h8");
}

.obdvbgbhd {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 20h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qw7b_6b1t {
  d: path("M8 20h8");
}

.r7xk8o29f {
  d: path("M12 4v16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="cohvj-bxo"/><path class="b6e35tlvq"/><path class="obdvbgbhd"/><path class="gop02zbrx"/><path class="r7xk8o29f"/><path class="qw7b_6b1t"/></g>`,
		"fallback": "iconmind:text-cursor-duotone-bold",
	});
}

export default Component;
