import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfzc8lbfq.css';
import '../../css/s/si00v7b8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfzc8lbfq"/><path class="si00v7b8i"/>`,
		"fallback": "gcp:video-intelligence-api",
	});
}

export default Component;
