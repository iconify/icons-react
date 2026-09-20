import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs4ystbaj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs4ystbaj"/>`,
		"fallback": "osmic:mast-communications-14",
	});
}

export default Component;
