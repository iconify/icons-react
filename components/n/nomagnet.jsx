import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm5uod30j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm5uod30j"/>`,
		"fallback": "raphael:nomagnet",
	});
}

export default Component;
