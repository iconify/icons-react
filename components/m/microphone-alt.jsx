import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrtryqu9x.css';
import '../../css/k/ke7qhdp9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrtryqu9x"/><path class="ke7qhdp9v"/>`,
		"fallback": "bxs:microphone-alt",
	});
}

export default Component;
