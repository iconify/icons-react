import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfzbl7pcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfzbl7pcl"/>`,
		"fallback": "griddy-icons:tool-filled",
	});
}

export default Component;
