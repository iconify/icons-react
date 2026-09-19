import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob56-7b2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ob56-7b2l"/>`,
		"fallback": "cbi:spotpear-ball-v1",
	});
}

export default Component;
