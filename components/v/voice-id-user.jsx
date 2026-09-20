import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s5tvomb2l.css';
import '../../css/f/fgm3c0bmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="s5tvomb2l"/><path class="fgm3c0bmk"/></g>`,
		"fallback": "streamline-freehand:voice-id-user",
	});
}

export default Component;
