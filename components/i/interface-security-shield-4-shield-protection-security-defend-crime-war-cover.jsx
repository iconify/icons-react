import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iq9yik21i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iq9yik21i"/>`,
		"fallback": "streamline:interface-security-shield-4-shield-protection-security-defend-crime-war-cover",
	});
}

export default Component;
