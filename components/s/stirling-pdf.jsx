import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjd-5qbcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjd-5qbcq"/>`,
		"fallback": "thesvg-color:stirling-pdf",
	});
}

export default Component;
