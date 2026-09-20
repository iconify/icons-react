import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8epdmagj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q8epdmagj"/>`,
		"fallback": "reicon:suitcase-tag",
	});
}

export default Component;
