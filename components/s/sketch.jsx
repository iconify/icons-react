import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcleu2o3y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcleu2o3y"/>`,
		"fallback": "la:sketch",
	});
}

export default Component;
