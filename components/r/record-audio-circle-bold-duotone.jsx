import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnb90nbxf.css';
import '../../css/u/uelp0rm2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnb90nbxf"/><path clip-rule="evenodd" class="uelp0rm2a"/>`,
		"fallback": "solar:record-audio-circle-bold-duotone",
	});
}

export default Component;
