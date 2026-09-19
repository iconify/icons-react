import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6ol2bc_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6ol2bc_v"/>`,
		"fallback": "ci:link-break",
	});
}

export default Component;
