import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnex464ct.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnex464ct"/>`,
		"fallback": "f7:keyboard-chevron-compact-down",
	});
}

export default Component;
