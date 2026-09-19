import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-j61nbvj.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-j61nbvj"/>`,
		"fallback": "f7:link-circle-fill",
	});
}

export default Component;
