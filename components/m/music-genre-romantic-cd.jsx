import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/z-pfipbhe.css';
import '../../css/z/zk4sr_mhh.css';
import '../../css/r/r5ffsqbee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="z-pfipbhe"/><path class="zk4sr_mhh"/><path class="r5ffsqbee"/></g>`,
		"fallback": "streamline-freehand:music-genre-romantic-cd",
	});
}

export default Component;
