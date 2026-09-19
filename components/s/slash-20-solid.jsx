import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhk6x7b4n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nhk6x7b4n"/>`,
		"fallback": "heroicons:slash-20-solid",
	});
}

export default Component;
