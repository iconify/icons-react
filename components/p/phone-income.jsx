import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnbyy1blt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnbyy1blt"/>`,
		"fallback": "iconoir:phone-income",
	});
}

export default Component;
