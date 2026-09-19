import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pg2rnuewc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pg2rnuewc"/>`,
		"fallback": "bxl:visual-studio",
	});
}

export default Component;
