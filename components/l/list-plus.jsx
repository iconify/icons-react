import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayjjo84mb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayjjo84mb"/>`,
		"fallback": "andrsrxn:list-plus",
	});
}

export default Component;
