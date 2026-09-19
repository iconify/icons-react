import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3yfvcbuz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q3yfvcbuz"/>`,
		"fallback": "gg:view-cols",
	});
}

export default Component;
