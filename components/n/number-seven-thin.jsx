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
		"content": `<style>.za5icjbuz {
  fill: currentColor;
  d: path("m171.83 49.15l-48 160A4 4 0 0 1 120 212a3.8 3.8 0 0 1-1.15-.17a4 4 0 0 1-2.68-5L162.62 52H88a4 4 0 0 1 0-8h80a4 4 0 0 1 3.83 5.15");
}
</style><path class="za5icjbuz"/>`,
		"fallback": "ph:number-seven-thin",
	});
}

export default Component;
