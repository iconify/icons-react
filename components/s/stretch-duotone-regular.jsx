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
		"content": `<style>.f5d6h4bjf {
  d: path("m7 5 5 5 5 -5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oe3oa5b3b {
  fill: currentColor;
  d: path("M9 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.w08657bnd {
  d: path("M9 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.wrji4lgnj {
  d: path("M12 8v7");
}

.zd1mml6it {
  d: path("m8 19 4 -4 4 4");
}
</style><g class="nrj6p8qat"><path class="oe3oa5b3b"/><path class="w08657bnd"/><path class="wrji4lgnj"/><path class="f5d6h4bjf"/><path class="zd1mml6it"/></g>`,
		"fallback": "iconmind:stretch-duotone-regular",
	});
}

export default Component;
