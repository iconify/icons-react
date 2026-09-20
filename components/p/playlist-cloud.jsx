import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/d0g1dp0cg.css';
import '../../css/i/izpy64bue.css';
import '../../css/l/llbe05l9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="d0g1dp0cg"/><path class="izpy64bue"/><path class="llbe05l9e"/></g>`,
		"fallback": "streamline-freehand-color:playlist-cloud",
	});
}

export default Component;
