import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d716e6bqm.css';
import '../../css/a/azo89xd7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d716e6bqm"/><path class="azo89xd7t"/></g>`,
		"fallback": "keyline-icons:message-off-two-tone",
	});
}

export default Component;
