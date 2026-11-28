import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx83zxlsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jx83zxlsq primary"/>`,
		"fallback": "iconaut:pipe-duotone",
	});
}

export default Component;
