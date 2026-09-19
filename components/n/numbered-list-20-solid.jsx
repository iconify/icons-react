import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sl8xq5ujb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sl8xq5ujb"/>`,
		"fallback": "heroicons:numbered-list-20-solid",
	});
}

export default Component;
