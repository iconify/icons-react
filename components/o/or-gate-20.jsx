import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gza0lnxru.css';
import '../../css/l/lcdh-cbzn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gza0lnxru"/><path class="lcdh-cbzn"/>`,
		"fallback": "energy-icons:or-gate-20",
	});
}

export default Component;
