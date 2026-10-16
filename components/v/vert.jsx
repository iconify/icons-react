import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl0b0_yrq.css';

const viewBox = {"width":300,"height":83};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl0b0_yrq"/>`,
		"fallback": "thesvg-color:vert",
	});
}

export default Component;
