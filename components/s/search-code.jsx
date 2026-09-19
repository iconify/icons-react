import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1rtdfb3c.css';
import '../../css/u/uowjoqehi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1rtdfb3c"/><path class="uowjoqehi"/>`,
		"fallback": "boxicons:search-code",
	});
}

export default Component;
