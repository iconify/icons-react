import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t-wkp8hgq.css';
import '../../css/g/grfl72bbk.css';
import '../../css/r/rj-6c4bkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="t-wkp8hgq"/><path class="grfl72bbk"/><path class="rj-6c4bkg"/></g>`,
		"fallback": "streamline-freehand-color:task-list-pin-1",
	});
}

export default Component;
