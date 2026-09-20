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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u84sg0ngq {
  d: path("M8 10a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.wqh892bhx {
  d: path("M12 4a8 8 0 1 0 8 8 6 6 0 0 1 -8 -8");
}

.wvuc0ff5n {
  d: path("M10 15a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.y6kfzfgng {
  d: path("M14 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="hntgybcog"><path class="wqh892bhx"/><path class="u84sg0ngq"/><path class="wvuc0ff5n"/><path class="y6kfzfgng"/></g>`,
		"fallback": "iconmind:session-cookie-outline-thin",
	});
}

export default Component;
