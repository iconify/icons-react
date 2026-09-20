import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1_al-bcd.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1_al-bcd"/>`,
		"fallback": "thesvg-color:planetscale-light",
	});
}

export default Component;
