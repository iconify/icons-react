import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgqpnubmx.css';
import '../../css/e/e8k7b6bzg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgqpnubmx"/><path class="e8k7b6bzg"/>`,
		"fallback": "selfhst:opengym",
	});
}

export default Component;
