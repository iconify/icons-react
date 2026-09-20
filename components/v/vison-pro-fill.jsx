import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwzv0hb7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jwzv0hb7g"/>`,
		"fallback": "mingcute:vison-pro-fill",
	});
}

export default Component;
