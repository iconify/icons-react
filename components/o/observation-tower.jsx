import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm3rfcb1k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm3rfcb1k"/>`,
		"fallback": "maki:observation-tower",
	});
}

export default Component;
