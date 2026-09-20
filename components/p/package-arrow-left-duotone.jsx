import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f1wb2ccqt.css';
import '../../css/p/p4a0wlb-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f1wb2ccqt"/><path class="p4a0wlb-s"/></g>`,
		"fallback": "keyline-icons:package-arrow-left-duotone",
	});
}

export default Component;
