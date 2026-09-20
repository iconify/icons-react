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
		"content": `<style>.u5-ni2b4p {
  fill: currentColor;
  d: path("M11.91 14h7.843a2.25 2.25 0 0 1 2.25 2.25v.905A3.75 3.75 0 0 1 20.696 20C19.13 21.345 16.89 22.002 14 22.002h-.179a1.75 1.75 0 0 0-.221-1.897l-.111-.121l-2.23-2.224a5.48 5.48 0 0 0 .65-3.76M6.5 10.5a4.5 4.5 0 0 1 3.46 7.377l2.823 2.814a.75.75 0 0 1-.975 1.134l-.085-.072l-2.903-2.896A4.5 4.5 0 1 1 6.5 10.5m0 1.5a3 3 0 1 0 0 6a3 3 0 0 0 0-6M14 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10");
}
</style><path class="u5-ni2b4p"/>`,
		"fallback": "fluent:person-search-24-filled",
	});
}

export default Component;
