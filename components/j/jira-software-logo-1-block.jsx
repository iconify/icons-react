import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vt3s2tbac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vt3s2tbac"/>`,
		"fallback": "streamline-logos:jira-software-logo-1-block",
	});
}

export default Component;
