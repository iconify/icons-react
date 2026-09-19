import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-8et3w6j.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-8et3w6j"/>`,
		"fallback": "garden:tray-book-26",
	});
}

export default Component;
