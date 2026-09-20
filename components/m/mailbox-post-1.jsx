import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b28khiaju.css';
import '../../css/b/b-dw7cc4k.css';
import '../../css/o/obwotbl4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b28khiaju"/><path class="b-dw7cc4k"/><path class="obwotbl4q"/></g>`,
		"fallback": "streamline-freehand-color:mailbox-post-1",
	});
}

export default Component;
