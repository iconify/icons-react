import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s14l_k1mj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s14l_k1mj"/>`,
		"fallback": "streamline-color:waning-cresent-moon-flat",
	});
}

export default Component;
