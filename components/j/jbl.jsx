import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ueax62bns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ueax62bns"/>`,
		"fallback": "thesvg-color:jbl",
	});
}

export default Component;
