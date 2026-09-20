import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tvnu1_efy.css';
import '../../css/r/rvigqgboc.css';
import '../../css/t/tfbf76z-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tvnu1_efy"/><path class="rvigqgboc"/><path class="tfbf76z-w"/></g>`,
		"fallback": "streamline-freehand-color:music-note-circle-block-1",
	});
}

export default Component;
