import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wwjpgwbog.css';
import '../../css/w/w3rog89ll.css';
import '../../css/f/f9kuftlin.css';
import '../../css/v/vun8npban.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wwjpgwbog"/><path class="w3rog89ll"/><path class="f9kuftlin"/><path class="vun8npban"/></g>`,
		"fallback": "withicons-bauhaus:teddy-bear",
	});
}

export default Component;
