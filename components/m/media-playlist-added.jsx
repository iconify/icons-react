import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j74d-_b7l.css';
import '../../css/i/i4dk0nbdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j74d-_b7l"/><path clip-rule="evenodd" class="i4dk0nbdv"/></g>`,
		"fallback": "nrk:media-playlist-added",
	});
}

export default Component;
