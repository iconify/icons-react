import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_736ebfb.css';
import '../../css/w/w0poz4bns.css';
import '../../css/h/h3-00cbib.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_736ebfb"/><path class="w0poz4bns"/><path class="h3-00cbib"/>`,
		"fallback": "energy-icons:monitor-play-20-bold",
	});
}

export default Component;
