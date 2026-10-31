import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wclbmvj7k.css';
import '../../css/j/jv6v4bcpo.css';
import '../../css/j/jlss9acge.css';
import '../../css/s/s656-fk9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wclbmvj7k wm-shadow"/><path class="jv6v4bcpo wm-shadow"/><path class="jlss9acge"/><path class="s656-fk9x"/></g>`,
		"fallback": "withicons-brutal:shield-plus",
	});
}

export default Component;
