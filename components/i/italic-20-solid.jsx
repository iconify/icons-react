import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjf65-bia.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zjf65-bia"/>`,
		"fallback": "heroicons:italic-20-solid",
	});
}

export default Component;
