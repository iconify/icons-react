import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8be_q3jj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8be_q3jj"/>`,
		"fallback": "ri:knife-fill",
	});
}

export default Component;
