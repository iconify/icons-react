import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bckavcbdl.css';
import '../../css/d/d958dab4i.css';
import '../../css/f/fkxyg9xjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bckavcbdl"/><path class="d958dab4i"/><path clip-rule="evenodd" class="fkxyg9xjl"/></g>`,
		"fallback": "reicon:thermometer-duotone",
	});
}

export default Component;
