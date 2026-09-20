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
		"content": `<style>.w3v_zdbwr {
  fill: currentColor;
  d: path("M240 124h-20V48a12 12 0 0 0-14.15-11.81l-160 29.1A12 12 0 0 0 36 77.09V124H16a4 4 0 0 0 0 8h20v46.91a12 12 0 0 0 9.85 11.8l160 29.09a11.3 11.3 0 0 0 2.16.2a12 12 0 0 0 12-12v-76h20a4 4 0 0 0 0-8ZM44 77.09a4 4 0 0 1 3.28-3.93l160-29.09A4 4 0 0 1 212 48v76H44ZM212 208a4 4 0 0 1-4.72 3.93l-160-29.09a4 4 0 0 1-3.28-3.93V132h168Z");
}
</style><path class="w3v_zdbwr"/>`,
		"fallback": "ph:perspective-thin",
	});
}

export default Component;
