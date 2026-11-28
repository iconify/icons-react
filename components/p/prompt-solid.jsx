import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z21k9mb8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z21k9mb8r"/>`,
		"fallback": "iconaut:prompt-solid",
	});
}

export default Component;
