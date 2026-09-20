import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/ose1lsbtw.css';
import '../../css/o/owjlmbb3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ose1lsbtw"/><path class="owjlmbb3u"/></g>`,
		"fallback": "keyline-icons:picture-in-picture-sharp-two-tone",
	});
}

export default Component;
