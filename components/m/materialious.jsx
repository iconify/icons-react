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
		"content": `<style>.a065tkwdf {
  d: path("m11.568 39.674l18.777-19.19L4.5 13.424z");
}

.ucjwj_bdv {
  d: path("m21.678 29.34l3.058 10.36L43.5 20.65l-25.802-7.084l.938 3.72");
}

.wvc94ibmd {
  cx: 17.271px;
  cy: 9.687px;
  rx: 1.359px;
  ry: 1.385px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><ellipse class="wvc94ibmd"/><path class="ucjwj_bdv"/><path class="a065tkwdf"/></g>`,
		"fallback": "arcticons:materialious",
	});
}

export default Component;
