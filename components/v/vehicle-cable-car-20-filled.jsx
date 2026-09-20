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
		"content": `<style>.khhfnbchb {
  fill: currentColor;
  d: path("M17.434 3.004a.5.5 0 1 1 .132.992L12 4.738V6a3 3 0 0 1-.764 2H13a3 3 0 0 1 3 3v2H4v-2a3 3 0 0 1 3-3h2a2 2 0 0 0 2-2V4.871L2.566 5.996a.5.5 0 1 1-.132-.992L11 3.862V3.5a.5.5 0 1 1 1 0v.229zM16 14v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1z");
}
</style><path class="khhfnbchb"/>`,
		"fallback": "fluent:vehicle-cable-car-20-filled",
	});
}

export default Component;
