import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz01vrbai.css';

const viewBox = {"width":400,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oz01vrbai"/>`,
		"fallback": "ps:up",
	});
}

export default Component;
