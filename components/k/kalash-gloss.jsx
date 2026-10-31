import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i31tw5b-x.css';
import '../../css/w/w2-g2t2qo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="i31tw5b-x wm-k"/><path class="w2-g2t2qo wm-a"/></g>`,
		"fallback": "withicons:kalash-gloss",
	});
}

export default Component;
