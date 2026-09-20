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
		"content": `<style>.f2vxqlbwm {
  fill: currentColor;
  d: path("M10 15a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.gf0hswvuq {
  fill: currentColor;
  d: path("M8 10a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n7t0anb5n {
  fill: currentColor;
  d: path("M14 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.u84sg0ngq {
  d: path("M8 10a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.uyhyoc4ot {
  fill: currentColor;
  d: path("M12 4a8 8 0 1 0 8 8 6 6 0 0 1 -8 -8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
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
</style><g class="hntgybcog"><path class="uyhyoc4ot"/><path class="gf0hswvuq"/><path class="f2vxqlbwm"/><path class="n7t0anb5n"/><path class="wqh892bhx"/><path class="u84sg0ngq"/><path class="wvuc0ff5n"/><path class="y6kfzfgng"/></g>`,
		"fallback": "iconmind:session-cookie-duotone-thin",
	});
}

export default Component;
