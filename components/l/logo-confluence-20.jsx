import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgc7dfzhb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgc7dfzhb"/>`,
		"fallback": "garden:logo-confluence-20",
	});
}

export default Component;
