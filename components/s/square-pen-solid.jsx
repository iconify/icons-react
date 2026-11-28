import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ennbw5bqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ennbw5bqi"/>`,
		"fallback": "iconaut:square-pen-solid",
	});
}

export default Component;
