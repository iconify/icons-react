import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw-4-8pcl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw-4-8pcl"/>`,
		"fallback": "pinhead:kick-scooter",
	});
}

export default Component;
