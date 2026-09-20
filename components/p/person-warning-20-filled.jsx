import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.oiz1xtbjq {
  fill: currentColor;
  d: path("M9 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-4.991 9A2 2 0 0 0 2 13c0 1.691.833 2.966 2.135 3.797C5.417 17.614 7.145 18 9 18h.005c0-.297.067-.602.213-.896L12.268 11zm9.594-.446l-3.496 6.998A1 1 0 0 0 11.002 19h6.996a1 1 0 0 0 .895-1.448l-3.5-6.999a1 1 0 0 0-1.79 0m1.395 1.941v3.002a.5.5 0 1 1-1 0v-3.002a.5.5 0 1 1 1 0m-.5 5.504a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1");
}
</style><path class="oiz1xtbjq"/>`,
		"fallback": "fluent:person-warning-20-filled",
	});
}

export default Component;
