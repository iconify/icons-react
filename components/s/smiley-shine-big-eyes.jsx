import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b4a-sublu.css';
import '../../css/k/kzoau0v5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b4a-sublu"/><path class="kzoau0v5y"/></g>`,
		"fallback": "streamline-freehand-color:smiley-shine-big-eyes",
	});
}

export default Component;
