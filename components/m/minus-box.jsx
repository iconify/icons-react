import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvffn5b2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvffn5b2y"/>`,
		"fallback": "mdi-light:minus-box",
	});
}

export default Component;
