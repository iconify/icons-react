import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/y/y39lupb1i.css';
import '../../css/j/j8_7y3biq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="y39lupb1i"/><path class="j8_7y3biq"/></g>`,
		"fallback": "lets-icons:tablet-light",
	});
}

export default Component;
