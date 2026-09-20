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
		"content": `<style>.qu5--e3hf {
  fill: currentColor;
  d: path("M116.21 101.26a4 4 0 0 1 2.53-5.05l12-4A4 4 0 0 1 136 96v40a4 4 0 0 1-8 0v-34.45l-6.74 2.24a4 4 0 0 1-5.05-2.53M244 208a4 4 0 0 1-4 4H16a4 4 0 0 1 0-8h12V104a12 12 0 0 1 12-12h44V56a12 12 0 0 1 12-12h64a12 12 0 0 1 12 12v76h44a12 12 0 0 1 12 12v60h12a4 4 0 0 1 4 4m-72-68v64h48v-60a4 4 0 0 0-4-4Zm-80 64h72V56a4 4 0 0 0-4-4H96a4 4 0 0 0-4 4Zm-56 0h48V100H40a4 4 0 0 0-4 4Z");
}
</style><path class="qu5--e3hf"/>`,
		"fallback": "ph:ranking-thin",
	});
}

export default Component;
