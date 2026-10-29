import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpu66u8hh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpu66u8hh"/>`,
		"fallback": "withicons:message-square-plus-solid",
	});
}

export default Component;
