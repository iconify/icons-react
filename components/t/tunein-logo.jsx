import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/l/l48v19blq.css';
import '../../css/d/ddbnlobxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="l48v19blq"/><path class="ddbnlobxr"/></g>`,
		"fallback": "streamline-logos:tunein-logo",
	});
}

export default Component;
