import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/c66c8d1xn.css';
import '../../css/e/esrfit-bu.css';
import '../../css/e/ege2gyb9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="c66c8d1xn"/><path class="esrfit-bu"/><path class="ege2gyb9k"/></g>`,
		"fallback": "streamline-freehand-color:microphone-karaoke-1",
	});
}

export default Component;
