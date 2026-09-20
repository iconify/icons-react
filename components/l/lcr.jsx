import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7r3pbozs.css';
import '../../css/e/ezke5sblm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7r3pbozs"/><path class="ezke5sblm"/>`,
		"fallback": "token:lcr",
	});
}

export default Component;
