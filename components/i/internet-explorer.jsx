import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a05ngs8sl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a05ngs8sl"/>`,
		"fallback": "fontisto:internet-explorer",
	});
}

export default Component;
