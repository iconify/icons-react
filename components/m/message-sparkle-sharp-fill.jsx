import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z64q5ub-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z64q5ub-m"/>`,
		"fallback": "keyline-icons:message-sparkle-sharp-fill",
	});
}

export default Component;
