import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oe_46l15z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oe_46l15z"/>`,
		"fallback": "nonicons:tmux-16",
	});
}

export default Component;
