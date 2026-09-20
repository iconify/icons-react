import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1vlcdv9q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a1vlcdv9q"/>`,
		"fallback": "ix:shield-filled",
	});
}

export default Component;
