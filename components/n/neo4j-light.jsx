import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yaw4gtbnx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yaw4gtbnx"/>`,
		"fallback": "selfhst:neo4j-light",
	});
}

export default Component;
