import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3sw-vbtx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3sw-vbtx"/>`,
		"fallback": "fe:laptop",
	});
}

export default Component;
