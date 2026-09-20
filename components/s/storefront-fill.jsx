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
		"content": `<style>.kjmuwqbci {
  fill: currentColor;
  d: path("M231.69 93.81L217.35 43.6A16.07 16.07 0 0 0 202 32H54a16.07 16.07 0 0 0-15.35 11.6L24.31 93.81A8 8 0 0 0 24 96v16a40 40 0 0 0 16 32v72a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8v-72a40 40 0 0 0 16-32V96a8 8 0 0 0-.31-2.19M88 112a24 24 0 0 1-35.12 21.26a8 8 0 0 0-1.82-1.06A24 24 0 0 1 40 112v-8h48Zm64 0a24 24 0 0 1-48 0v-8h48Zm64 0a24 24 0 0 1-11.07 20.2a8 8 0 0 0-1.8 1.05A24 24 0 0 1 168 112v-8h48Z");
}
</style><path class="kjmuwqbci"/>`,
		"fallback": "ph:storefront-fill",
	});
}

export default Component;
