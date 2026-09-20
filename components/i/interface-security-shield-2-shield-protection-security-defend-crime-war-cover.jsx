import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zngbw6b6l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zngbw6b6l"/>`,
		"fallback": "streamline:interface-security-shield-2-shield-protection-security-defend-crime-war-cover",
	});
}

export default Component;
