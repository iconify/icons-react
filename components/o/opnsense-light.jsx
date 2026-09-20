import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tskkj_7-j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tskkj_7-j"/>`,
		"fallback": "selfhst:opnsense-light",
	});
}

export default Component;
