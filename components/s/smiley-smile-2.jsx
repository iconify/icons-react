import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jk7qchb-g.css';
import '../../css/d/dtkn3-bvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jk7qchb-g"/><path class="dtkn3-bvm"/></g>`,
		"fallback": "streamline-freehand-color:smiley-smile-2",
	});
}

export default Component;
