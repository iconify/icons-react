import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjsseubff.css';
import '../../css/p/p9m7uqziz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer pjsseubff"/><path class="duoicon-primary-layer p9m7uqziz"/>`,
		"fallback": "duo-icons:message-2",
	});
}

export default Component;
