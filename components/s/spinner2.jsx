import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay1_04bqb.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay1_04bqb"/>`,
		"fallback": "picon:spinner2",
	});
}

export default Component;
