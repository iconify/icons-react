import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gzdegqbrv.css';
import '../../css/q/qo3-r85um.css';
import '../../css/m/moaw0d06n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gzdegqbrv"/><path class="qo3-r85um"/><path clip-rule="evenodd" class="moaw0d06n"/></g>`,
		"fallback": "solar:panels-top-right-bold",
	});
}

export default Component;
