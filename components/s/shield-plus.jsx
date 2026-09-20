import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfkh3qbae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfkh3qbae"/>`,
		"fallback": "uis:shield-plus",
	});
}

export default Component;
