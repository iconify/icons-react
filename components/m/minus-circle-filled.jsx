import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpt8hi11j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpt8hi11j"/>`,
		"fallback": "tdesign:minus-circle-filled",
	});
}

export default Component;
