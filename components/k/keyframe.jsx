import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7m7uglpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7m7uglpd"/>`,
		"fallback": "iconoir:keyframe",
	});
}

export default Component;
