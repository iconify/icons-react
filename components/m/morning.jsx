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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.we-2i6bsw {
  d: path("M12 7.25V12l-3 2m6.5 4.75a2.75 2.75 0 0 1 5.5 0Zm-.5 2.5h6.25");
}
</style><g class="hntgybcog"><path class="dldnhmbjp"/><path class="we-2i6bsw"/></g>`,
		"fallback": "iconoven:morning",
	});
}

export default Component;
