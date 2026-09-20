import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn1x1w7ak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xn1x1w7ak"/>`,
		"fallback": "si:south-east-fill",
	});
}

export default Component;
