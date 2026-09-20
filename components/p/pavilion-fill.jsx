import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jaxf6993j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jaxf6993j"/>`,
		"fallback": "mingcute:pavilion-fill",
	});
}

export default Component;
