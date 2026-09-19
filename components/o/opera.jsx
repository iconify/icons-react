import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f33f75blw.css';

const viewBox = {"width":851,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f33f75blw"/>`,
		"fallback": "fontelico:opera",
	});
}

export default Component;
