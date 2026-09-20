import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5h87bmtj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g5h87bmtj"/>`,
		"fallback": "ix:user-check-filled",
	});
}

export default Component;
