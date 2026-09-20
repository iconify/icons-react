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
		"content": `<style>.a9-h2tbkl {
  fill: currentColor;
  d: path("M5.5 20q-.213 0-.357-.143T5 19.5t.143-.357T5.5 19h13q.214 0 .357.143T19 19.5t-.143.357T18.5 20zm6.202-4.074q-.136-.053-.267-.184l-3.389-3.388q-.14-.14-.15-.344t.15-.364t.354-.16t.354.16l2.746 2.746V4.5q0-.213.143-.357T12 4t.357.143t.143.357v9.892l2.746-2.746q.14-.14.344-.15t.364.15t.16.354t-.16.354l-3.389 3.388q-.13.131-.267.184q-.136.053-.298.053t-.298-.053");
}
</style><path class="a9-h2tbkl"/>`,
		"fallback": "material-symbols-light:vertical-align-bottom-outline-rounded",
	});
}

export default Component;
