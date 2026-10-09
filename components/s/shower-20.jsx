import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrqyz4i2u.css';
import '../../css/n/nx_frvvuj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrqyz4i2u"/><path class="nx_frvvuj"/>`,
		"fallback": "energy-icons:shower-20",
	});
}

export default Component;
