import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a51mpzb3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a51mpzb3e"/>`,
		"fallback": "tdesign:usercase-link-filled",
	});
}

export default Component;
