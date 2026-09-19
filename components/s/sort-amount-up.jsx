import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cni9eacnt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cni9eacnt"/>`,
		"fallback": "glyphs:sort-amount-up",
	});
}

export default Component;
