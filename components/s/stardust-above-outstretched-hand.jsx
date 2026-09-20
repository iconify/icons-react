import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j85y1pb5n.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j85y1pb5n"/>`,
		"fallback": "pinhead:stardust-above-outstretched-hand",
	});
}

export default Component;
