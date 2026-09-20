import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clp786bls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clp786bls"/>`,
		"fallback": "keyline-icons:rotate-cw-plus",
	});
}

export default Component;
