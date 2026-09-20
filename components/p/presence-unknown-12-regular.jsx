import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ie_rsebwe {
  fill: currentColor;
  d: path("M6 1.5a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9M0 6a6 6 0 1 1 12 0A6 6 0 0 1 0 6");
}
</style><path class="ie_rsebwe"/>`,
		"fallback": "fluent:presence-unknown-12-regular",
	});
}

export default Component;
