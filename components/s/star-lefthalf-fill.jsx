import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxhn9i52s.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxhn9i52s"/>`,
		"fallback": "f7:star-lefthalf-fill",
	});
}

export default Component;
