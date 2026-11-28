import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ga618bbrt.css';
import '../../css/s/s1qbo6fdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ga618bbrt secondary"/><path class="primary s1qbo6fdq"/>`,
		"fallback": "iconaut:star-duo",
	});
}

export default Component;
