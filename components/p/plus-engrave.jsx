import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n0c1-_gug.css';
import '../../css/e/e8cb6cwzn.css';
import '../../css/a/ani_o8bam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="n0c1-_gug"/><path class="e8cb6cwzn wm-shadow"/><path class="ani_o8bam"/></g>`,
		"fallback": "withicons:plus-engrave",
	});
}

export default Component;
