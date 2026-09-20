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
		"content": `<style>.cubuh3beh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.567 19.97v8.541m.001-1.815l3.866-3.847m-2.636 2.623l3.04 3.026");
}

.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.svids7b8p {
  cx: 17.143px;
  cy: 20.237px;
  r: 0.747px;
  fill: currentColor;
}

.tjea4cbuz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.143 22.852v5.659m6.397-.001v-3.523a2.135 2.135 0 0 0-4.27 0m0 3.524v-5.659m12.572 5.658v-8.54h1.921a3.737 3.737 0 0 1 3.737 3.736v1.068a3.737 3.737 0 0 1-3.737 3.737zM10.5 19.97v8.541m0-2.975l4.591-5.538m0 8.513l-3.517-4.271");
}
</style><rect class="j3s9ivbxi"/><path class="cubuh3beh"/><circle class="svids7b8p"/><path class="tjea4cbuz"/>`,
		"fallback": "arcticons:kinkd",
	});
}

export default Component;
