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
		"content": `<style>.ifrgh_bsa {
  fill: currentColor;
  d: path("M8 11h3v10h2V11h3l-4-4zM4 3v2h16V3z");
}
</style><path class="ifrgh_bsa"/>`,
		"fallback": "ic:outline-vertical-align-top",
	});
}

export default Component;
