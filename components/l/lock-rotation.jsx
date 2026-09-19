import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddo1gnbtf.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddo1gnbtf"/>`,
		"fallback": "f7:lock-rotation",
	});
}

export default Component;
