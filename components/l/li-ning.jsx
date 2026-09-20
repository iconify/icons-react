import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcho2thtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcho2thtz"/>`,
		"fallback": "thesvg-color:li-ning",
	});
}

export default Component;
