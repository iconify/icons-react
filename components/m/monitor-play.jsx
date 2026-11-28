import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vr0c4zexh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vr0c4zexh"/>`,
		"fallback": "noviair-light:monitor-play",
	});
}

export default Component;
