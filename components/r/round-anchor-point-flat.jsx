import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/uinfs0_rx.css';
import '../../css/m/m38sfqbcz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="uinfs0_rx"/><path class="m38sfqbcz"/></g>`,
		"fallback": "streamline-flex-color:round-anchor-point-flat",
	});
}

export default Component;
