import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/ldtcomb8y.css';
import '../../css/f/fxsp8ybww.css';
import '../../css/d/dbp8e1bni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ldtcomb8y"/><path class="fxsp8ybww"/><path class="dbp8e1bni"/></g>`,
		"fallback": "streamline-freehand:ipod-player-2",
	});
}

export default Component;
