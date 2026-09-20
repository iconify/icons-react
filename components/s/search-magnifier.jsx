import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bdyzezb_h.css';
import '../../css/m/mrc6zi3hd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bdyzezb_h"/><path class="mrc6zi3hd"/></g>`,
		"fallback": "streamline-freehand-color:search-magnifier",
	});
}

export default Component;
