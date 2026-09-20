import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/u/unssvuewl.css';
import '../../css/t/tjkxd16kx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="unssvuewl"/><path class="tjkxd16kx"/></g>`,
		"fallback": "lets-icons:load-list-light",
	});
}

export default Component;
