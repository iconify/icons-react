import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5ej5wb-a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5ej5wb-a"/>`,
		"fallback": "streamline:interface-security-shield-1-shield-protection-security-defend-crime-war-cover",
	});
}

export default Component;
