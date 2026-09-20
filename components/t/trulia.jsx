import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf8j2-5ha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wf8j2-5ha"/>`,
		"fallback": "simple-icons:trulia",
	});
}

export default Component;
