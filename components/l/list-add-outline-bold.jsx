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
		"content": `<style>.jk6bn7bej {
  d: path("M15.5 12h6");
}

.l-utwubka {
  d: path("M18.5 9v6");
}

.ldkstzszf {
  d: path("M3 16h11");
}

.nrqy16b7j {
  d: path("M3 6h11");
}

.qnmmmsbha {
  d: path("M3 11h11");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="nrqy16b7j"/><path class="qnmmmsbha"/><path class="ldkstzszf"/><path class="l-utwubka"/><path class="jk6bn7bej"/></g>`,
		"fallback": "iconmind:list-add-outline-bold",
	});
}

export default Component;
