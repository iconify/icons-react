import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uee3w3bpb.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uee3w3bpb"/>`,
		"fallback": "wi:moon-alt-waxing-crescent-1",
	});
}

export default Component;
