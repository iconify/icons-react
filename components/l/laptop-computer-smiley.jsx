import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wuv1ph3iw.css';
import '../../css/f/ffkvcqbsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wuv1ph3iw"/><path class="ffkvcqbsn"/></g>`,
		"fallback": "streamline-freehand-color:laptop-computer-smiley",
	});
}

export default Component;
