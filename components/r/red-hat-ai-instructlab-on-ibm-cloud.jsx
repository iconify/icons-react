import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsxy61lui.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsxy61lui"/>`,
		"fallback": "carbon:red-hat-ai-instructlab-on-ibm-cloud",
	});
}

export default Component;
