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
		"content": `<style>.y79__c1sa {
  fill: currentColor;
  d: path("M21 3H3v18h18zm-6 6h-4v2h4v2h-4v2h4v2H9V7h6z");
}
</style><path class="y79__c1sa"/>`,
		"fallback": "ic:sharp-explicit",
	});
}

export default Component;
