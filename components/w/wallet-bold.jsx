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
		"content": `<style>.vyy6nt_gc {
  fill: currentColor;
  d: path("M196 136a16 16 0 1 1-16-16a16 16 0 0 1 16 16m40-36v80a32 32 0 0 1-32 32H60a32 32 0 0 1-32-32V60.92A32 32 0 0 1 60 28h132a12 12 0 0 1 0 24H60a8 8 0 0 0-8 8.26v.08A8.32 8.32 0 0 0 60.48 68H204a32 32 0 0 1 32 32m-24 0a8 8 0 0 0-8-8H60.48A33.7 33.7 0 0 1 52 90.92V180a8 8 0 0 0 8 8h144a8 8 0 0 0 8-8Z");
}
</style><path class="vyy6nt_gc"/>`,
		"fallback": "ph:wallet-bold",
	});
}

export default Component;
