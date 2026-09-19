import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hc9hztbaq.css';

const viewBox = {"width":472,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hc9hztbaq"/>`,
		"fallback": "zmdi:live-tv",
	});
}

export default Component;
