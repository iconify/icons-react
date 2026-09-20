import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pay8v6kzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pay8v6kzb"/>`,
		"fallback": "keyline-icons:parasol",
	});
}

export default Component;
