import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zoa16p8ga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zoa16p8ga"/>`,
		"fallback": "mynaui:move-solid",
	});
}

export default Component;
