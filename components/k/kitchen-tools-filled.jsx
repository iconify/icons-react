import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzzgv3b1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wzzgv3b1m"/>`,
		"fallback": "griddy-icons:kitchen-tools-filled",
	});
}

export default Component;
