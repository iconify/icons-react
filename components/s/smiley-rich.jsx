import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x41hzt5kl.css';
import '../../css/t/tikrxg4mx.css';
import '../../css/k/ksu2s41sc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x41hzt5kl"/><path class="tikrxg4mx"/><path class="ksu2s41sc"/></g>`,
		"fallback": "streamline-freehand-color:smiley-rich",
	});
}

export default Component;
