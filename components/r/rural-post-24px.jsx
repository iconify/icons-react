import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rf36wsnug.css';
import '../../css/n/nf96soofn.css';
import '../../css/q/qbl80ob0j.css';
import '../../css/i/ive1xhxje.css';
import '../../css/n/nz9vxcc1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rf36wsnug"/><path class="nf96soofn"/><path class="qbl80ob0j"/><path class="ive1xhxje"/><path class="nz9vxcc1x"/></g>`,
		"fallback": "healthicons:rural-post-24px",
	});
}

export default Component;
