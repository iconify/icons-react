import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1jbzv3dv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r1jbzv3dv"/>`,
		"fallback": "streamline-logos:jira-software-logo-2-solid",
	});
}

export default Component;
