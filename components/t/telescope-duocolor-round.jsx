import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nuvbu6bqy.css';
import '../../css/j/j5ogwdeze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nuvbu6bqy"/><path class="j5ogwdeze"/></g>`,
		"fallback": "coolicons:telescope-duocolor-round",
	});
}

export default Component;
