import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y2c16xblh.css';
import '../../css/u/u8u8a5bqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wm-k y2c16xblh"/><path class="u8u8a5bqf wm-a"/></g>`,
		"fallback": "withicons:nutcracker-gloss",
	});
}

export default Component;
