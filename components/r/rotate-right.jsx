import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4wmcmron.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4wmcmron"/>`,
		"fallback": "f7:rotate-right",
	});
}

export default Component;
