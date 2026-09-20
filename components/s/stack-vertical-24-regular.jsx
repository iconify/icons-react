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
		"content": `<style>.wzpqmf-fu {
  fill: currentColor;
  d: path("M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v14a.75.75 0 0 1-1.5 0v-4a1.75 1.75 0 0 0-1.75-1.75H6.25a1.75 1.75 0 0 0-1.75 1.75v4a.75.75 0 0 1-1.5 0zm1.5 7.26A3.24 3.24 0 0 1 6.25 13h11.5c.644 0 1.245.188 1.75.51v-2.26a1.75 1.75 0 0 0-1.75-1.75H6.25a1.75 1.75 0 0 0-1.75 1.75zm15-7.26a1.75 1.75 0 0 0-1.75-1.75H6.25A1.75 1.75 0 0 0 4.5 6.25v2.26A3.24 3.24 0 0 1 6.25 8h11.5c.644 0 1.245.188 1.75.51z");
}
</style><path class="wzpqmf-fu"/>`,
		"fallback": "fluent:stack-vertical-24-regular",
	});
}

export default Component;
