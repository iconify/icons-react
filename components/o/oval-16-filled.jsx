import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hawdhbufd {
  fill: currentColor;
  d: path("M1 8a5 5 0 0 1 5-5h4a5 5 0 0 1 0 10H6a5 5 0 0 1-5-5");
}
</style><path class="hawdhbufd"/>`,
		"fallback": "fluent:oval-16-filled",
	});
}

export default Component;
