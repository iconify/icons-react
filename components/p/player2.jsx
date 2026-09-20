import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/anp3_vbwx.css';
import '../../css/t/tufv5tbgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="anp3_vbwx"/><path class="tufv5tbgd"/></g>`,
		"fallback": "thesvg:player2",
	});
}

export default Component;
