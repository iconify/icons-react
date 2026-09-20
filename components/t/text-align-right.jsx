import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjo5wgb5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjo5wgb5v"/>`,
		"fallback": "proicons:text-align-right",
	});
}

export default Component;
