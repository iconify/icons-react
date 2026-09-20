import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvjku0arf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvjku0arf"/>`,
		"fallback": "ooui:level-three-rtl",
	});
}

export default Component;
