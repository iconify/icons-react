import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/t/t8tdq3vdl.css';
import '../../css/m/mnjer5bid.css';
import '../../css/e/e7-t_vbov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="t8tdq3vdl"/><rect class="mnjer5bid"/><circle class="e7-t_vbov"/></g>`,
		"fallback": "bitcoin-icons:wallet-outline",
	});
}

export default Component;
