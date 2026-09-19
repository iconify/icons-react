import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh-al0bul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vh-al0bul"/>`,
		"fallback": "grommet-icons:troubleshoot",
	});
}

export default Component;
