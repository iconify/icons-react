import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbj5fzbut.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbj5fzbut"/>`,
		"fallback": "cil:spa",
	});
}

export default Component;
