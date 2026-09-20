import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/b/bgsr00b2c.css';
import '../../css/p/pmo9h3vcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="bgsr00b2c"/><path class="pmo9h3vcj"/></g>`,
		"fallback": "lets-icons:lock-alt-light",
	});
}

export default Component;
