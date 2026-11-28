import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlpsal7ej.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tojrffm3c.css';
import '../../css/n/n0298tbfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlpsal7ej secondary"/><g class="dt0cm9dhy primary"><path class="tojrffm3c"/><path class="n0298tbfx"/></g>`,
		"fallback": "iconaut:square-off-duo",
	});
}

export default Component;
