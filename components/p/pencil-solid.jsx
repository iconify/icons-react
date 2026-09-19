import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jacn1v9zh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jacn1v9zh"/>`,
		"fallback": "heroicons:pencil-solid",
	});
}

export default Component;
