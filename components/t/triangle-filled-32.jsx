import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af4lzgb0x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af4lzgb0x"/>`,
		"fallback": "qlementine-icons:triangle-filled-32",
	});
}

export default Component;
