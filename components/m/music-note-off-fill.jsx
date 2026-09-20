import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qv26iob9o.css';
import '../../css/n/ndwm85bos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qv26iob9o"/><path class="ndwm85bos"/></g>`,
		"fallback": "keyline-icons:music-note-off-fill",
	});
}

export default Component;
