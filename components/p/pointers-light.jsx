import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/smoaa5b3r.css';
import '../../css/a/a0twn3bdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="smoaa5b3r"/><path class="a0twn3bdo"/></g>`,
		"fallback": "lets-icons:pointers-light",
	});
}

export default Component;
