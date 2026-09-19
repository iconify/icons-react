import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbl9e-bnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbl9e-bnp"/>`,
		"fallback": "ci:octagon",
	});
}

export default Component;
