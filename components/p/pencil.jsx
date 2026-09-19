import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_yw8fb7q.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_yw8fb7q"/>`,
		"fallback": "f7:pencil",
	});
}

export default Component;
