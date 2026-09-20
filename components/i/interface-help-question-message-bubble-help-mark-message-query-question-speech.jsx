import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruhmssb4g.css';
import '../../css/f/f9g6pqpws.css';
import '../../css/s/sdn94xi5p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ruhmssb4g"/><path class="f9g6pqpws"/><path class="sdn94xi5p"/>`,
		"fallback": "streamline:interface-help-question-message-bubble-help-mark-message-query-question-speech",
	});
}

export default Component;
