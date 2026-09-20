import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uaf725b_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uaf725b_o"/>`,
		"fallback": "solar:minimalistic-magnifer-bug-outline",
	});
}

export default Component;
