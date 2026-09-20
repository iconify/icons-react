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
		"content": `<style>.c438ceftc {
  d: path("M12 17v5");
}

.es-ot3p7v {
  d: path("M18 11h4");
}

.g1du9hbaz {
  d: path("M6 11a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rvoc0ob8r {
  d: path("M2 11h4");
}
</style><g class="hntgybcog"><path class="g1du9hbaz"/><path class="c438ceftc"/><path class="rvoc0ob8r"/><path class="es-ot3p7v"/></g>`,
		"fallback": "iconmind:roundabout-outline-thin",
	});
}

export default Component;
