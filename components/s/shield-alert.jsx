import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wclbmvj7k.css';
import '../../css/j/jv6v4bcpo.css';
import '../../css/j/jdaq9-blq.css';
import '../../css/f/ff61wny5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wclbmvj7k wm-shadow"/><path class="jv6v4bcpo wm-shadow"/><path class="jdaq9-blq"/><path class="ff61wny5s"/></g>`,
		"fallback": "withicons-brutal:shield-alert",
	});
}

export default Component;
