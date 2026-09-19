import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcp-m_d0f.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcp-m_d0f"/>`,
		"fallback": "bpmn:intermediate-event-catch-signal",
	});
}

export default Component;
