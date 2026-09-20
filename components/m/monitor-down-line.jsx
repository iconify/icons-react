import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isbsl39ij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isbsl39ij"/>`,
		"fallback": "si:monitor-down-line",
	});
}

export default Component;
