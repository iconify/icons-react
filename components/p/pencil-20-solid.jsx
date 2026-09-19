import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_qksxbla.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_qksxbla"/>`,
		"fallback": "heroicons:pencil-20-solid",
	});
}

export default Component;
