import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itrhu2bdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itrhu2bdt"/>`,
		"fallback": "ci:minus-circle-outline",
	});
}

export default Component;
