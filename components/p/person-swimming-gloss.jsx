import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vqpolzb2c.css';
import '../../css/v/vqopcqbfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="vqpolzb2c wm-k"/><path class="vqopcqbfc wm-a"/></g>`,
		"fallback": "withicons:person-swimming-gloss",
	});
}

export default Component;
