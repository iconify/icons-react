import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkfr-acjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkfr-acjg"/>`,
		"fallback": "token:moonbase-alpha",
	});
}

export default Component;
