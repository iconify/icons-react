import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrac7tc6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrac7tc6a"/>`,
		"fallback": "boxicons:monitor-filled",
	});
}

export default Component;
