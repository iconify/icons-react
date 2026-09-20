import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt6k55bjy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zt6k55bjy"/>`,
		"fallback": "la:snapchat",
	});
}

export default Component;
