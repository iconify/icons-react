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
		"content": `<style>.f9v7d3bju {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.446 7.63v6.961M39.554 40.37v-7.165m0-14.234v-3.549h0a7.777 7.777 0 1 0-15.554 0v17.156a7.777 7.777 0 1 1-15.554 0v-3.753");
}

.j2-wlnbhs {
  cx: 8.446px;
  cy: 21.708px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3.946px;
  ry: 3.955px;
}

.uqbuj_z8n {
  cx: 39.554px;
  cy: 26.088px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3.946px;
  ry: 3.955px;
}
</style><path class="f9v7d3bju"/><ellipse class="j2-wlnbhs"/><ellipse class="uqbuj_z8n"/>`,
		"fallback": "arcticons:transit",
	});
}

export default Component;
