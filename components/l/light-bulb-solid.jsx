import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d9ezus9os.css';
import '../../css/i/ih6mbqb9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d9ezus9os"/><path clip-rule="evenodd" class="ih6mbqb9v"/></g>`,
		"fallback": "heroicons:light-bulb-solid",
	});
}

export default Component;
