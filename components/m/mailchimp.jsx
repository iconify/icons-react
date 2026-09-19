import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur7cbwjjr.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur7cbwjjr"/>`,
		"fallback": "fa7-brands:mailchimp",
	});
}

export default Component;
