import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zclhip4rm {
  fill: currentColor;
  d: path("M7.5 4H5.25A3.25 3.25 0 0 0 2 7.25v9.5A3.25 3.25 0 0 0 5.25 20h13.5A3.25 3.25 0 0 0 22 16.75v-9.5A3.25 3.25 0 0 0 18.75 4H16.5v7h4v5.75a1.75 1.75 0 0 1-1.75 1.75H5.25a1.75 1.75 0 0 1-1.75-1.75V11h4zM9 11h6V4H9z");
}
</style><path class="zclhip4rm"/>`,
		"fallback": "fluent:panel-top-gallery-24-filled",
	});
}

export default Component;
