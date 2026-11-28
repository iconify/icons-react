import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcp48hbqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcp48hbqy"/>`,
		"fallback": "iconaut:three-fingers-solid",
	});
}

export default Component;
