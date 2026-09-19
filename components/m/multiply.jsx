import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x31ta7bfz.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x31ta7bfz"/>`,
		"fallback": "f7:multiply",
	});
}

export default Component;
