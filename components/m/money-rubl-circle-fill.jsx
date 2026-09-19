import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yow4obkue.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yow4obkue"/>`,
		"fallback": "f7:money-rubl-circle-fill",
	});
}

export default Component;
