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
		"content": `<style>.rrlgp8bgu {
  fill: currentColor;
  d: path("M215 41a51.28 51.28 0 0 0-72.5 0L41 142.5a51.26 51.26 0 0 0 72.49 72.5L215 113.5a51.31 51.31 0 0 0 0-72.5M105 206.5A39.26 39.26 0 0 1 49.48 151L96 104.49L151.52 160ZM206.52 105L160 151.51L104.48 96L151 49.5a39.26 39.26 0 0 1 55.52 55.5m-18.26-21.24a6 6 0 0 1 0 8.48l-24 24a6 6 0 0 1-8.49-8.48l24-24a6 6 0 0 1 8.49 0");
}
</style><path class="rrlgp8bgu"/>`,
		"fallback": "ph:pill-light",
	});
}

export default Component;
