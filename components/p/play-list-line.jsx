import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgul6q2_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgul6q2_v"/>`,
		"fallback": "ri:play-list-line",
	});
}

export default Component;
