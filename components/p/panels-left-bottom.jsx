import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x72p28bct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x72p28bct"/>`,
		"fallback": "keyline-icons:panels-left-bottom",
	});
}

export default Component;
