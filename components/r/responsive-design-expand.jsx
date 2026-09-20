import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/j80x_6w1a.css';
import '../../css/r/r3uw8bcwl.css';
import '../../css/i/ixd243bqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="j80x_6w1a"/><path class="r3uw8bcwl"/><path class="ixd243bqj"/></g>`,
		"fallback": "streamline-freehand-color:responsive-design-expand",
	});
}

export default Component;
