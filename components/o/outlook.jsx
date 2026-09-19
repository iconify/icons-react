import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rd4o3lbxf.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rd4o3lbxf"/>`,
		"fallback": "zmdi:outlook",
	});
}

export default Component;
