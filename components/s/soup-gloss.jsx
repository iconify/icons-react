import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kem0vpb6y.css';
import '../../css/n/nfei5bb7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="kem0vpb6y wm-k"/><path class="nfei5bb7c wm-a"/></g>`,
		"fallback": "withicons:soup-gloss",
	});
}

export default Component;
