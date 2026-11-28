import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhrbp90le.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhrbp90le"/>`,
		"fallback": "iconaut:layers-merge-solid",
	});
}

export default Component;
