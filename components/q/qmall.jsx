import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psh1nub4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psh1nub4x"/>`,
		"fallback": "token:qmall",
	});
}

export default Component;
