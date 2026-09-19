import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frd3b7bqe.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frd3b7bqe"/>`,
		"fallback": "f7:thermometer",
	});
}

export default Component;
