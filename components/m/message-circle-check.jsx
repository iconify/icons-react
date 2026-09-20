import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cryayq36o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cryayq36o"/>`,
		"fallback": "tabler:message-circle-check",
	});
}

export default Component;
