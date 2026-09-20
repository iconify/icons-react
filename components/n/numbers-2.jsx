import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in1b-kb3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in1b-kb3i"/>`,
		"fallback": "tdesign:numbers-2",
	});
}

export default Component;
