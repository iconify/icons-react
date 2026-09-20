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
		"content": `<style>.q600ioy0k {
  fill: currentColor;
  d: path("M134 24v208a6 6 0 0 1-12 0V24a6 6 0 0 1 12 0");
}
</style><path class="q600ioy0k"/>`,
		"fallback": "ph:line-vertical-light",
	});
}

export default Component;
