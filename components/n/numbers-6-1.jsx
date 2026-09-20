import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_8855w1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_8855w1s"/>`,
		"fallback": "tdesign:numbers-6-1",
	});
}

export default Component;
