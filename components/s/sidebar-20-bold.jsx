import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nivpnqg4j.css';
import '../../css/p/pddr5rgfp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nivpnqg4j"/><path class="pddr5rgfp"/>`,
		"fallback": "energy-icons:sidebar-20-bold",
	});
}

export default Component;
