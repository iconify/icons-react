import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_weoss7b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_weoss7b"/>`,
		"fallback": "subway:time-4",
	});
}

export default Component;
