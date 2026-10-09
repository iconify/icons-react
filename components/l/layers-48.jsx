import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ciarmei3k.css';
import '../../css/n/nafa54a1z.css';
import '../../css/o/ofvhr7lmd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ciarmei3k"/><path class="nafa54a1z"/><path class="ofvhr7lmd"/>`,
		"fallback": "energy-icons:layers-48",
	});
}

export default Component;
