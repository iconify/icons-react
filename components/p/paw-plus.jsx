import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abi04obmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abi04obmw"/>`,
		"fallback": "noviair-light:paw-plus",
	});
}

export default Component;
