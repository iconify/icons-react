import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9c6o_bmx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9c6o_bmx"/>`,
		"fallback": "pinhead:observatory-dome",
	});
}

export default Component;
