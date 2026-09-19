import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu9-g_lhn.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yu9-g_lhn"/>`,
		"fallback": "bpmn:start-event-non-interrupting-signal",
	});
}

export default Component;
