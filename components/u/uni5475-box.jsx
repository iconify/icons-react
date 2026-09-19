import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke2tg-bfl.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke2tg-bfl"/>`,
		"fallback": "dinkie-icons:uni5475-box",
	});
}

export default Component;
