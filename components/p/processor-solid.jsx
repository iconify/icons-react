import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkkv6qbnz.css';
import '../../css/m/mg4u22kbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkkv6qbnz"/><path clip-rule="evenodd" class="mg4u22kbm"/>`,
		"fallback": "basil:processor-solid",
	});
}

export default Component;
