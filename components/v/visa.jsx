import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kg45qdbqb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kg45qdbqb"/>`,
		"fallback": "icons8:visa",
	});
}

export default Component;
