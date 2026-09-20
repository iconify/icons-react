import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpl9ltrpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpl9ltrpi"/>`,
		"fallback": "mdi:study-chair",
	});
}

export default Component;
