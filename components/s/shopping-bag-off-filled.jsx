import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/argsfhb-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="argsfhb-c"/>`,
		"fallback": "griddy-icons:shopping-bag-off-filled",
	});
}

export default Component;
