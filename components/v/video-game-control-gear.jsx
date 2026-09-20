import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/ap2gunbzp.css';
import '../../css/a/a-fyqcche.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ap2gunbzp"/><path class="a-fyqcche"/></g>`,
		"fallback": "streamline-freehand:video-game-control-gear",
	});
}

export default Component;
