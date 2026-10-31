import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idf59lbkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idf59lbkv"/>`,
		"fallback": "coolicons:user-plus-corner-round",
	});
}

export default Component;
