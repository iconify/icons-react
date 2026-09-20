import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_kfolbfb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_kfolbfb"/>`,
		"fallback": "raphael:pallete",
	});
}

export default Component;
