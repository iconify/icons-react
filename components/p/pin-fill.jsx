import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t413ssb2k.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t413ssb2k"/>`,
		"fallback": "f7:pin-fill",
	});
}

export default Component;
