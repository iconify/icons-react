import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqwaw3p0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qqwaw3p0k"/>`,
		"fallback": "griddy-icons:tooth-fissure-sealing-filled",
	});
}

export default Component;
