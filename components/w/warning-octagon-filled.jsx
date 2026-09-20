import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd1c23p7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd1c23p7e"/>`,
		"fallback": "ix:warning-octagon-filled",
	});
}

export default Component;
