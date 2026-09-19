import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd6gj6bbb.css';
import '../../css/i/ifptogbbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd6gj6bbb"/><path class="ifptogbbi"/>`,
		"fallback": "boxicons:search-big-code",
	});
}

export default Component;
