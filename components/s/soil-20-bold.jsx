import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5-lt0yws.css';
import '../../css/p/p6ha02euk.css';
import '../../css/r/ro0uxekvs.css';
import '../../css/y/ybbr6lous.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5-lt0yws"/><path class="p6ha02euk"/><path class="ro0uxekvs"/><path class="ybbr6lous"/>`,
		"fallback": "energy-icons:soil-20-bold",
	});
}

export default Component;
