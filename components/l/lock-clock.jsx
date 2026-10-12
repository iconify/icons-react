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
		"content": `<style>.dldnhmbjp {
  d: path("M12 21.25A9.25 9.25 0 1 1 21.25 12");
}

.fvbqtsg2t {
  d: path("M15.75 16.25V15a2 2 0 0 1 4 0v1.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mfonslb2n {
  d: path("M12 7.25V12l-3 2");
}

.o4sxu5i3a {
  width: 7px;
  height: 5px;
  x: 14.25px;
  y: 16.25px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><path class="dldnhmbjp"/><path class="mfonslb2n"/><rect class="o4sxu5i3a"/><path class="fvbqtsg2t"/></g>`,
		"fallback": "iconoven:lock-clock",
	});
}

export default Component;
