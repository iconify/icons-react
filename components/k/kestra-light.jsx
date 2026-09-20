import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp5qngbok.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pp5qngbok"/>`,
		"fallback": "selfhst:kestra-light",
	});
}

export default Component;
