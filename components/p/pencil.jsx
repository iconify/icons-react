import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsvs-7g4k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsvs-7g4k"/>`,
		"fallback": "entypo:pencil",
	});
}

export default Component;
