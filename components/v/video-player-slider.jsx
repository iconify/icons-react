import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jph9i8buu.css';
import '../../css/j/jx34v3mmx.css';
import '../../css/i/iyayrzz3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jph9i8buu"/><path class="jx34v3mmx"/><path class="iyayrzz3q"/></g>`,
		"fallback": "streamline-freehand:video-player-slider",
	});
}

export default Component;
