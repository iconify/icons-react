import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lwrj0pbhp.css';
import '../../css/g/gqwtgtcal.css';
import '../../css/y/yxmr97b0q.css';
import '../../css/p/pd-2-rbfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lwrj0pbhp"/><path class="gqwtgtcal"/><path class="yxmr97b0q"/><path class="pd-2-rbfh"/></g>`,
		"fallback": "streamline-freehand-color:settings-cog-double-1",
	});
}

export default Component;
