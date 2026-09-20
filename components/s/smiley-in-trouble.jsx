import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gs8j9g__t.css';
import '../../css/t/tnotst_dm.css';
import '../../css/r/rky1rxb2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gs8j9g__t"/><path class="tnotst_dm"/><path class="rky1rxb2x"/></g>`,
		"fallback": "streamline-freehand-color:smiley-in-trouble",
	});
}

export default Component;
