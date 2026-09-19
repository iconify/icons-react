import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifkq_huon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifkq_huon"/>`,
		"fallback": "ci:long-left",
	});
}

export default Component;
