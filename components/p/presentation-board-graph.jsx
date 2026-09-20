import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b3lribbqz.css';
import '../../css/z/zcdjnlb4u.css';
import '../../css/b/buvxuebiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b3lribbqz"/><path class="zcdjnlb4u"/><path class="buvxuebiv"/></g>`,
		"fallback": "streamline-freehand-color:presentation-board-graph",
	});
}

export default Component;
