import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/js_zqcfan.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="js_zqcfan"/>`,
		"fallback": "mdi:language-r",
	});
}

export default Component;
