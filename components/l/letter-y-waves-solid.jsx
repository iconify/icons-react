import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtb38qbxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtb38qbxb"/>`,
		"fallback": "mynaui:letter-y-waves-solid",
	});
}

export default Component;
