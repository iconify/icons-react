import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s4smqub5w.css';
import '../../css/o/oycvfsbjh.css';
import '../../css/g/g72t0rbmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="s4smqub5w"/><path class="oycvfsbjh wm-a"/><path class="g72t0rbmk wm-s"/></g>`,
		"fallback": "withicons:stamp-solid",
	});
}

export default Component;
