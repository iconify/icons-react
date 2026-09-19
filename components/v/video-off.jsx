import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz4fe1p6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz4fe1p6s"/>`,
		"fallback": "circum:video-off",
	});
}

export default Component;
