import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q80vbhykh.css';
import '../../css/w/wjpqeobsz.css';
import '../../css/s/socrm3qbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="q80vbhykh"/><path class="wjpqeobsz"/><path class="socrm3qbj"/></g>`,
		"fallback": "struq:shortcuts",
	});
}

export default Component;
