import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kxx793gkn.css';
import '../../css/n/nbufqeege.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="kxx793gkn"/><path class="nbufqeege wm-a"/></g>`,
		"fallback": "withicons:network-solid",
	});
}

export default Component;
