import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/no-cdxbss.css';
import '../../css/b/blqx9nbej.css';
import '../../css/e/ewa20qhlh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="no-cdxbss"/><path class="blqx9nbej"/><path class="ewa20qhlh"/></g>`,
		"fallback": "streamline-freehand-color:laptop-action-lock",
	});
}

export default Component;
