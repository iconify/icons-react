import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.f25pkg3lz {
  d: path("M26.457 36.688c5.48.362 9.4 1.87 9.4 3.616C35.857 42.345 30.55 44 24 44s-11.857-1.655-11.857-3.696c0-1.746 3.92-3.254 9.4-3.616m7.223-27.113q2.7 1.367 3.844 3.514");
}

.ttftg8l_y {
  cx: 24px;
  cy: 18.702px;
  rx: 14.898px;
  ry: 14.702px;
}

.u6n-14r0t {
  d: path("M21.906 33.308c1.423 2.717-.018 4.745-4.323 5.496c0 0 1.376 1.605 6.417 1.605m2.094-7.101c-1.423 2.717.018 4.745 4.323 5.496c0 0-1.376 1.605-6.417 1.605");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><ellipse class="ttftg8l_y"/><path class="f25pkg3lz"/><path class="u6n-14r0t"/></g>`,
		"fallback": "arcticons:sporcle",
	});
}

export default Component;
