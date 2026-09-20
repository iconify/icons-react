import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhi-qwb-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhi-qwb-v"/>`,
		"fallback": "thesvg-color:minds",
	});
}

export default Component;
