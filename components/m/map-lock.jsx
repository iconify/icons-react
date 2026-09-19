import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-1k3_b2n.css';
import '../../css/q/qjd9umv4n.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-1k3_b2n"/><path class="qjd9umv4n"/>`,
		"fallback": "gis:map-lock",
	});
}

export default Component;
