import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrp1dvb1e.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrp1dvb1e"/>`,
		"fallback": "f7:tv",
	});
}

export default Component;
