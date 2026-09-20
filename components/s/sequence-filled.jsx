import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdnxlnb_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdnxlnb_r"/>`,
		"fallback": "tdesign:sequence-filled",
	});
}

export default Component;
