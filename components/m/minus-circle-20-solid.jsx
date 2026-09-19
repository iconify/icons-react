import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwqdbnx5o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hwqdbnx5o"/>`,
		"fallback": "heroicons:minus-circle-20-solid",
	});
}

export default Component;
