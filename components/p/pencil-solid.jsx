import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ouae2vbkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouae2vbkq"/>`,
		"fallback": "withicons:pencil-solid",
	});
}

export default Component;
