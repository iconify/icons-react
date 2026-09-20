import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmz2-lxle.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmz2-lxle"/>`,
		"fallback": "si:pin-alt-1-line",
	});
}

export default Component;
