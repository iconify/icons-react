import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ge6e27bsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ge6e27bsh"/>`,
		"fallback": "streamline-logos:jira-software-logo-1-solid",
	});
}

export default Component;
