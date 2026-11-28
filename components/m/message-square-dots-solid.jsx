import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t04in-bya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t04in-bya"/>`,
		"fallback": "iconaut:message-square-dots-solid",
	});
}

export default Component;
