import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzmx73baa.css';
import '../../css/j/jt5nlubqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzmx73baa"/><path clip-rule="evenodd" class="jt5nlubqy"/>`,
		"fallback": "solar:panel-text-right-bold",
	});
}

export default Component;
