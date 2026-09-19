import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ziprlc7ge.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ziprlc7ge"/>`,
		"fallback": "f7:rectangle-dock",
	});
}

export default Component;
