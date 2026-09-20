import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exz7v5bzz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="exz7v5bzz"/>`,
		"fallback": "ix:list-percentage",
	});
}

export default Component;
