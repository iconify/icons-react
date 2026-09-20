import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7nf2wbln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k7nf2wbln"/>`,
		"fallback": "token:smt",
	});
}

export default Component;
