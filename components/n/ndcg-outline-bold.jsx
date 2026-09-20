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

.jsj5j3bdw {
  d: path("M13 10.5V13");
}

.kfdmhd64i {
  d: path("m15 15 6 6");
}

.kikp0-sku {
  d: path("M10 9v4");
}

.lip701r7h {
  d: path("M7 7v6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="ffw_pwyfz"/><path class="kfdmhd64i"/><path class="lip701r7h"/><path class="kikp0-sku"/><path class="jsj5j3bdw"/></g>`,
		"fallback": "iconmind:ndcg-outline-bold",
	});
}

export default Component;
