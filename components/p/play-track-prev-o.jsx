import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xvlhbdcvj.css';
import '../../css/f/fzcb9bb2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xvlhbdcvj"/><path class="fzcb9bb2p"/></g>`,
		"fallback": "gg:play-track-prev-o",
	});
}

export default Component;
