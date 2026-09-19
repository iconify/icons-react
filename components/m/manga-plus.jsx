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
		"content": `<style>.bjnre1lwt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.965 41.863a21.5 21.5 0 1 1 5.838-5.81");
}

.e7hc0srpr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m35.965 41.863l8.413 2.36l-2.575-8.17M9.5 24h29M24 9.5v29");
}
</style><path class="e7hc0srpr"/><path class="bjnre1lwt"/>`,
		"fallback": "arcticons:manga-plus",
	});
}

export default Component;
