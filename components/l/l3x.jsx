import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f46n3wgqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f46n3wgqa"/>`,
		"fallback": "token:l3x",
	});
}

export default Component;
