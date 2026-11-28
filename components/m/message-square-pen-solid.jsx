import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-qcbyb_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-qcbyb_p"/>`,
		"fallback": "iconaut:message-square-pen-solid",
	});
}

export default Component;
