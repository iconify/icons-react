import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n86pfnh7n.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n86pfnh7n"/>`,
		"fallback": "f7:minus-square-fill",
	});
}

export default Component;
