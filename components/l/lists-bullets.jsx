import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tq33ytmxn.css';
import '../../css/g/gnzz2pbrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tq33ytmxn"/><path class="gnzz2pbrj"/></g>`,
		"fallback": "streamline-freehand-color:lists-bullets",
	});
}

export default Component;
