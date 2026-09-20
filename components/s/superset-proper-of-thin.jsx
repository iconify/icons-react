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
		"content": `<style>.c9zvvld_r {
  fill: currentColor;
  d: path("M220 128a84.09 84.09 0 0 1-84 84H64a4 4 0 0 1 0-8h72a76 76 0 0 0 0-152H64a4 4 0 0 1 0-8h72a84.09 84.09 0 0 1 84 84");
}
</style><path class="c9zvvld_r"/>`,
		"fallback": "ph:superset-proper-of-thin",
	});
}

export default Component;
