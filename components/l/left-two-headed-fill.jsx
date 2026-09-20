import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izyf8vb-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izyf8vb-q"/>`,
		"fallback": "si:left-two-headed-fill",
	});
}

export default Component;
