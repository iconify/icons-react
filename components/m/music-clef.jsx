import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mol4hk4eu.css';
import '../../css/v/vkvbxzhpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mol4hk4eu"/><path class="vkvbxzhpk"/></g>`,
		"fallback": "streamline-freehand-color:music-clef",
	});
}

export default Component;
