import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aooua_bdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aooua_bdb"/>`,
		"fallback": "griddy-icons:leafs-filled",
	});
}

export default Component;
