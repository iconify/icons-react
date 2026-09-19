import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2ucjcb5v.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2ucjcb5v"/>`,
		"fallback": "fluent-mdl2:message-friend-request",
	});
}

export default Component;
