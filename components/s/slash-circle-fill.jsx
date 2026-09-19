import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u03tmmbom.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u03tmmbom"/>`,
		"fallback": "f7:slash-circle-fill",
	});
}

export default Component;
