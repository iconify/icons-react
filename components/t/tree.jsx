import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ce63oobqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ce63oobqb"/>`,
		"fallback": "gg:tree",
	});
}

export default Component;
