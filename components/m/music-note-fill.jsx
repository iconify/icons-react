import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zii0zsbrt.css';
import '../../css/o/oolr8x1ag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zii0zsbrt"/><path class="oolr8x1ag"/></g>`,
		"fallback": "keyline-icons:music-note-fill",
	});
}

export default Component;
