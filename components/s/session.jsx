import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvl-vxb9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvl-vxb9b"/>`,
		"fallback": "thesvg-color:session",
	});
}

export default Component;
