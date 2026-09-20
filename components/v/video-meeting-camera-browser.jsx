import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t2ru60cbr.css';
import '../../css/k/kccg3k40n.css';
import '../../css/c/cg5b7tbik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="t2ru60cbr"/><path class="kccg3k40n"/><path class="cg5b7tbik"/></g>`,
		"fallback": "streamline-freehand:video-meeting-camera-browser",
	});
}

export default Component;
