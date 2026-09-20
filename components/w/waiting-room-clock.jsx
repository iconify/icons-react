import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qdwkcav3b.css';
import '../../css/r/rxn5zs92s.css';
import '../../css/y/yb_8ueo6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qdwkcav3b"/><path class="rxn5zs92s"/><path class="yb_8ueo6g"/></g>`,
		"fallback": "streamline-freehand-color:waiting-room-clock",
	});
}

export default Component;
