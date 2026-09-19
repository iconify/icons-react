import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onr2f2ppx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onr2f2ppx"/>`,
		"fallback": "iconoir:translate",
	});
}

export default Component;
