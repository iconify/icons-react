import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnq13b_qu.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnq13b_qu"/>`,
		"fallback": "f7:triangle-lefthalf-fill",
	});
}

export default Component;
