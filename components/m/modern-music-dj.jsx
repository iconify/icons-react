import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fhc8vnbrf.css';
import '../../css/b/bbmrarjtx.css';
import '../../css/a/arwxpf80d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fhc8vnbrf"/><path class="bbmrarjtx"/><path class="arwxpf80d"/></g>`,
		"fallback": "streamline-freehand:modern-music-dj",
	});
}

export default Component;
