import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxayxvndo.css';
import '../../css/x/xfzudwcmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="nxayxvndo"/><path class="xfzudwcmn"/>`,
		"fallback": "lets-icons:message-alt-duotone",
	});
}

export default Component;
