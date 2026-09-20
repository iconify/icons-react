import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fix_3rbfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fix_3rbfu"/>`,
		"fallback": "si:south-east-escape-fill",
	});
}

export default Component;
