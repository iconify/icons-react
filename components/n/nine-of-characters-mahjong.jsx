import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz9aracnx.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kz9aracnx"/>`,
		"fallback": "dinkie-icons:nine-of-characters-mahjong",
	});
}

export default Component;
