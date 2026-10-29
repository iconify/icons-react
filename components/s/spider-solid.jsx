import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m1t32eo2u.css';
import '../../css/p/pdldxnb-u.css';
import '../../css/n/nfyqixscy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="m1t32eo2u"/><path class="pdldxnb-u wm-a"/><path class="nfyqixscy wm-s"/></g>`,
		"fallback": "withicons:spider-solid",
	});
}

export default Component;
