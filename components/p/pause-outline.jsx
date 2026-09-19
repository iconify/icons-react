import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myw4k0vkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pause-outline"><path class="Vector myw4k0vkw" clip-rule="evenodd"/></g>`,
		"fallback": "cuida:pause-outline",
	});
}

export default Component;
