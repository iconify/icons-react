import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypby706kn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypby706kn"/>`,
		"fallback": "iconaut:tram-solid",
	});
}

export default Component;
