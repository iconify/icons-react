import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x3nm16blk.css';
import '../../css/o/op-pzyb7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="x3nm16blk"/><path class="op-pzyb7b"/></g>`,
		"fallback": "streamline-freehand:video-game-controller-team",
	});
}

export default Component;
