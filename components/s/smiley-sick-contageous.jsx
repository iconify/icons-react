import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qr28dwbpx.css';
import '../../css/q/qslt2wbxu.css';
import '../../css/s/s1wdbybaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qr28dwbpx"/><path class="qslt2wbxu"/><path class="s1wdbybaz"/></g>`,
		"fallback": "streamline-freehand-color:smiley-sick-contageous",
	});
}

export default Component;
