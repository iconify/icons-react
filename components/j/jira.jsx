import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikjw0blbu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikjw0blbu"/>`,
		"fallback": "cib:jira",
	});
}

export default Component;
