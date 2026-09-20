import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3tj9_bai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3tj9_bai"/>`,
		"fallback": "si:square-line",
	});
}

export default Component;
