import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwwft199d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwwft199d"/>`,
		"fallback": "la:page4",
	});
}

export default Component;
