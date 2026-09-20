import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/byqctddic.css';
import '../../css/q/q_a3xr8cd.css';
import '../../css/c/c2j93zwmk.css';
import '../../css/i/ikbjqqzcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="byqctddic"/><path class="q_a3xr8cd"/><path class="c2j93zwmk"/><path class="ikbjqqzcc"/></g>`,
		"fallback": "streamline-freehand:vinyl-record-player-2",
	});
}

export default Component;
