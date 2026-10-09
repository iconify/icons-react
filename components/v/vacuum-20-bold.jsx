import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8gpsn7-o.css';
import '../../css/n/nbr-frb3w.css';
import '../../css/c/cs47l5nhg.css';
import '../../css/d/dpbszfs_x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8gpsn7-o"/><path class="nbr-frb3w"/><path class="cs47l5nhg"/><path class="dpbszfs_x"/>`,
		"fallback": "energy-icons:vacuum-20-bold",
	});
}

export default Component;
