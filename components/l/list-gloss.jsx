import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pds583ave.css';
import '../../css/i/ino1h6bqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="pds583ave wm-k"/><path class="ino1h6bqf wm-a"/></g>`,
		"fallback": "withicons:list-gloss",
	});
}

export default Component;
