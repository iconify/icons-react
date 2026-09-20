import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibo_w4bdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibo_w4bdw"/>`,
		"fallback": "mynaui:radio-solid",
	});
}

export default Component;
