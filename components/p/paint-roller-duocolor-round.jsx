import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jj-e3pb_r.css';
import '../../css/j/j9sgwxzhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jj-e3pb_r"/><path class="j9sgwxzhu"/></g>`,
		"fallback": "coolicons:paint-roller-duocolor-round",
	});
}

export default Component;
