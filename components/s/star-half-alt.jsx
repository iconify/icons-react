import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1so0ab6o.css';
import '../../css/p/p1-cd6b4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1so0ab6o"/><path class="p1-cd6b4l"/>`,
		"fallback": "uim:star-half-alt",
	});
}

export default Component;
