import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckgwp449k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckgwp449k"/>`,
		"fallback": "iconaut:message-square-dashed-solid",
	});
}

export default Component;
