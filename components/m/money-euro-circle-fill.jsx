import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f00vbwb3i.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f00vbwb3i"/>`,
		"fallback": "f7:money-euro-circle-fill",
	});
}

export default Component;
