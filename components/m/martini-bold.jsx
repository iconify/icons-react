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
		"content": `<style>.krkyq-buc {
  fill: currentColor;
  d: path("M243.09 35.41A12 12 0 0 0 232 28H24a12 12 0 0 0-8.48 20.49L116 149v55H88a12 12 0 0 0 0 24h80a12 12 0 0 0 0-24h-28v-55L240.48 48.49a12 12 0 0 0 2.61-13.08M203 52l-12 12H65L53 52Zm-75 75L89 88h78Z");
}
</style><path class="krkyq-buc"/>`,
		"fallback": "ph:martini-bold",
	});
}

export default Component;
