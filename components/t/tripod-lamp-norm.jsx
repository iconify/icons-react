import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8in9rrwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8in9rrwh"/>`,
		"fallback": "cbi:tripod-lamp-norm",
	});
}

export default Component;
