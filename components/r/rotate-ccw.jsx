import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odx1occis.css';
import '../../css/x/xflj7b96n.css';
import '../../css/i/ik7t6gbzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="odx1occis"><path class="xflj7b96n"/><path class="ik7t6gbzg"/></g>`,
		"fallback": "matita:rotate-ccw",
	});
}

export default Component;
