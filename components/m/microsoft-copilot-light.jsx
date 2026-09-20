import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a53r7jbxn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a53r7jbxn"/>`,
		"fallback": "selfhst:microsoft-copilot-light",
	});
}

export default Component;
