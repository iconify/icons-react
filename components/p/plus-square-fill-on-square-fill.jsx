import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6vgv7b4d.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6vgv7b4d"/>`,
		"fallback": "f7:plus-square-fill-on-square-fill",
	});
}

export default Component;
