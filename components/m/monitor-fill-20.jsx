import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdp7o9mju.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdp7o9mju"/>`,
		"fallback": "garden:monitor-fill-20",
	});
}

export default Component;
