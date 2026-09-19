import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_6d-1f-o.css';

const viewBox = {"width":512,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_6d-1f-o"/>`,
		"fallback": "ps:people-team",
	});
}

export default Component;
