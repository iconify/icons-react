import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bnl0_qbml.css';
import '../../css/r/rg-m8gm0q.css';
import '../../css/f/f8qywgl5f.css';
import '../../css/s/sas1sybli.css';
import '../../css/h/hlhl_ab6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bnl0_qbml"/><path class="rg-m8gm0q"/><path class="f8qywgl5f"/><path class="sas1sybli"/><path class="hlhl_ab6c"/></g>`,
		"fallback": "solar:playback-speed-bold",
	});
}

export default Component;
