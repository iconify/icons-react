import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b3_9-ebna.css';
import '../../css/x/xon_9ib8a.css';
import '../../css/e/eelkazb4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b3_9-ebna"/><path class="xon_9ib8a"/><path class="eelkazb4o"/></g>`,
		"fallback": "keyline-icons:message-sparkles-two-tone",
	});
}

export default Component;
