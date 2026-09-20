import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brw66jb6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="brw66jb6a"/>`,
		"fallback": "streamline-logos:jira-software-logo-2-block",
	});
}

export default Component;
