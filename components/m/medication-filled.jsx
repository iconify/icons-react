import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8yrn8kro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j8yrn8kro"/>`,
		"fallback": "griddy-icons:medication-filled",
	});
}

export default Component;
