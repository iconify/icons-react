import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrk6y7b9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrk6y7b9m"/>`,
		"fallback": "iconaut:mug-solid",
	});
}

export default Component;
