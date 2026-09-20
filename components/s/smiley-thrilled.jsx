import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zu4sstb8d.css';
import '../../css/t/tdcyjvbxs.css';
import '../../css/t/tlw9-9bjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zu4sstb8d"/><path class="tdcyjvbxs"/><path class="tlw9-9bjt"/></g>`,
		"fallback": "streamline-freehand-color:smiley-thrilled",
	});
}

export default Component;
