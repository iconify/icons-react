import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f912b9wmg.css';
import '../../css/c/cgczxwbbg.css';
import '../../css/h/hqgq3dbge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="f912b9wmg"/><path class="cgczxwbbg wm-a"/><path class="hqgq3dbge"/></g>`,
		"fallback": "withicons:plug-duo",
	});
}

export default Component;
