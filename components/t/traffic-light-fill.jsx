import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbkzc6b1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbkzc6b1f"/>`,
		"fallback": "ri:traffic-light-fill",
	});
}

export default Component;
