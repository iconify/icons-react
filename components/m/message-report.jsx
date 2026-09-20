import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm2f1wbjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm2f1wbjg"/>`,
		"fallback": "tabler:message-report",
	});
}

export default Component;
