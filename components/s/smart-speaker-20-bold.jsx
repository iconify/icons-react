import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi4epefpx.css';
import '../../css/o/oiwmoi7co.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pi4epefpx"/><path class="oiwmoi7co"/>`,
		"fallback": "energy-icons:smart-speaker-20-bold",
	});
}

export default Component;
