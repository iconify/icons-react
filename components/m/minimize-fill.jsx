import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tquf41b9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tquf41b9r"/>`,
		"fallback": "eva:minimize-fill",
	});
}

export default Component;
