import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fofr1v_oe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fofr1v_oe"/>`,
		"fallback": "tdesign:play",
	});
}

export default Component;
