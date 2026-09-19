import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7q6z1bzg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7q6z1bzg"/>`,
		"fallback": "ion:text",
	});
}

export default Component;
