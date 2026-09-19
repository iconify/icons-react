import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oaqd1-b4h.css';

const viewBox = {"width":1088,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oaqd1-b4h"/>`,
		"fallback": "fa:odnoklassniki",
	});
}

export default Component;
