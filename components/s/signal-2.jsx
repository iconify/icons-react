import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6sim5rjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6sim5rjt"/>`,
		"fallback": "bx:signal-2",
	});
}

export default Component;
