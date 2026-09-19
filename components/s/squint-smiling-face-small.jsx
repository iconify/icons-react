import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3w7_bbqb.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3w7_bbqb"/>`,
		"fallback": "dinkie-icons:squint-smiling-face-small",
	});
}

export default Component;
