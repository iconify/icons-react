import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm3szlzsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm3szlzsr"/>`,
		"fallback": "ri:list-ordered",
	});
}

export default Component;
