import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne6hg34qf.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ne6hg34qf"/>`,
		"fallback": "academicons:mathoverflow-square",
	});
}

export default Component;
