import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wghfu3bnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wghfu3bnf"/>`,
		"fallback": "hugeicons:package-process",
	});
}

export default Component;
