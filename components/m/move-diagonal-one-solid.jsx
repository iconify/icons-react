import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwu2i75do.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwu2i75do"/>`,
		"fallback": "mynaui:move-diagonal-one-solid",
	});
}

export default Component;
