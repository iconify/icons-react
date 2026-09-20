import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6m1gdbbt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6m1gdbbt"/>`,
		"fallback": "selfhst:microsoft-copilot-dark",
	});
}

export default Component;
