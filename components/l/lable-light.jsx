import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/l/lwy3kjbdk.css';
import '../../css/n/nmur6okjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="lwy3kjbdk"/><circle class="nmur6okjy"/></g>`,
		"fallback": "lets-icons:lable-light",
	});
}

export default Component;
