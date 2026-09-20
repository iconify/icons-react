import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k42_wfgps.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k42_wfgps"/>`,
		"fallback": "zondicons:queue",
	});
}

export default Component;
