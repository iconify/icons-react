import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu19h5b1q.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hu19h5b1q"/>`,
		"fallback": "f7:star",
	});
}

export default Component;
