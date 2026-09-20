import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykrhbm4ed.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykrhbm4ed"/>`,
		"fallback": "picon:tetris",
	});
}

export default Component;
