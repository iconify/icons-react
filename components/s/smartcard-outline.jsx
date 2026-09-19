import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/o/of_ppxbni.css';
import '../../css/l/l_z7clbyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="of_ppxbni"/><rect class="l_z7clbyi"/></g>`,
		"fallback": "bitcoin-icons:smartcard-outline",
	});
}

export default Component;
