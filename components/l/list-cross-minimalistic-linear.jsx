import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xa_506f5h.css';
import '../../css/u/u-zqtib1a.css';
import '../../css/f/f8edcu39k.css';
import '../../css/l/l2mcogbbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xa_506f5h"/><path class="u-zqtib1a"/><path class="f8edcu39k"/><path class="l2mcogbbt"/></g>`,
		"fallback": "solar:list-cross-minimalistic-linear",
	});
}

export default Component;
