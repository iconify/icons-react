import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yg-jznogv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yg-jznogv"/>`,
		"fallback": "ri:star-line",
	});
}

export default Component;
