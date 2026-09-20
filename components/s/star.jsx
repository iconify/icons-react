import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlysuybdi.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlysuybdi"/>`,
		"fallback": "system-uicons:star",
	});
}

export default Component;
