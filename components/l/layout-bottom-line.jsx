import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w367kk4-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w367kk4-p"/>`,
		"fallback": "ri:layout-bottom-line",
	});
}

export default Component;
