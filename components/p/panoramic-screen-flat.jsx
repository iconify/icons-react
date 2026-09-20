import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/ftluirb2s.css';
import '../../css/m/m8-5c-bjx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ftluirb2s"/><path class="m8-5c-bjx"/></g>`,
		"fallback": "streamline-flex-color:panoramic-screen-flat",
	});
}

export default Component;
