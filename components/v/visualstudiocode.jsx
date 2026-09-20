import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odal1gbms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odal1gbms"/>`,
		"fallback": "simple-icons:visualstudiocode",
	});
}

export default Component;
