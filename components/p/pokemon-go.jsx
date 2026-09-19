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
		"content": `<style>.ee8w9sbdc {
  cx: 23.99px;
  cy: 23.99px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.n6w3b0d3u {
  cx: 23.99px;
  cy: 23.99px;
  r: 8.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.q3qhweb2m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M2.49 23.99h13m17 0h13");
}
</style><circle class="ee8w9sbdc"/><circle class="n6w3b0d3u"/><path class="q3qhweb2m"/>`,
		"fallback": "arcticons:pokemon-go",
	});
}

export default Component;
