import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qg60jfjeb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qg60jfjeb"/>`,
		"fallback": "cbi:rakuten-viki-alt",
	});
}

export default Component;
