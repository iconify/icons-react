import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c09-p1zve.css';
import '../../css/y/yfn8ewbim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c09-p1zve"/><path class="yfn8ewbim"/></g>`,
		"fallback": "streamline-freehand-color:toilet-sign",
	});
}

export default Component;
