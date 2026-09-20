import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b6z4fildu.css';
import '../../css/a/a5wgy1bzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="b6z4fildu"/><path class="a5wgy1bzs"/></g>`,
		"fallback": "streamline-freehand:resize-arrow-retract-horizontal",
	});
}

export default Component;
