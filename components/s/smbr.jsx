import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qi-ddebor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qi-ddebor"/>`,
		"fallback": "token:smbr",
	});
}

export default Component;
