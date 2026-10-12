import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epgf2xatz.css';
import '../../css/y/ys1xrmbto.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epgf2xatz"/><path class="ys1xrmbto"/>`,
		"fallback": "energy-icons:oil-can-20",
	});
}

export default Component;
