import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/izeitkbtq.css';
import '../../css/s/sas1sybli.css';
import '../../css/f/f8qywgl5f.css';
import '../../css/r/rg-m8gm0q.css';
import '../../css/m/m3_yopbbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="izeitkbtq"/><path class="sas1sybli"/><path class="f8qywgl5f"/><path class="rg-m8gm0q"/><path clip-rule="evenodd" class="m3_yopbbn"/></g>`,
		"fallback": "solar:playback-speed-outline",
	});
}

export default Component;
