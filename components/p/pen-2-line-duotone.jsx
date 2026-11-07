import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t-d1zfbuf.css';
import '../../css/w/wa25nab9h.css';
import '../../css/c/cj64798lz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="t-d1zfbuf"/><path class="wa25nab9h"/><path class="cj64798lz"/></g>`,
		"fallback": "solar:pen-2-line-duotone",
	});
}

export default Component;
