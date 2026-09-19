import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv0dxxbxv.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv0dxxbxv"/>`,
		"fallback": "bpmn:start-event-non-interrupting-escalation",
	});
}

export default Component;
