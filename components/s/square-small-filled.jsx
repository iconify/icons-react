import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgy0d7bqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="wgy0d7bqv"/>`,
		"fallback": "boxicons:square-small-filled",
	});
}

export default Component;
