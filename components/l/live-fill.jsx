import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlinamb2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlinamb2y"/>`,
		"fallback": "ri:live-fill",
	});
}

export default Component;
