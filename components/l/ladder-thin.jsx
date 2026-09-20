import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lnr9muc0s {
  fill: currentColor;
  d: path("M211.76 214.63L160.26 73l10.54-29H184a4 4 0 0 0 0-8H88a4 4 0 0 0 0 8h10.29l-62 170.63a4 4 0 0 0 2.39 5.13A4.2 4.2 0 0 0 40 220a4 4 0 0 0 3.76-2.63L54.44 188h55.49l-9.69 26.63a4 4 0 0 0 2.39 5.13a4.1 4.1 0 0 0 1.37.24a4 4 0 0 0 3.76-2.63L127.17 164h57.66l19.41 53.37A4 4 0 0 0 208 220a4.2 4.2 0 0 0 1.37-.24a4 4 0 0 0 2.39-5.13M130.29 132H74.8l14.55-40h55.48Zm32-88l-14.55 40H92.26l14.54-40ZM57.35 180l14.54-40h55.49l-14.55 40Zm72.72-24L156 84.7l25.92 71.3Z");
}
</style><path class="lnr9muc0s"/>`,
		"fallback": "ph:ladder-thin",
	});
}

export default Component;
