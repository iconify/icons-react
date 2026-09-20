import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onkproblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onkproblb"/>`,
		"fallback": "material-icon-theme:kubernetes",
	});
}

export default Component;
