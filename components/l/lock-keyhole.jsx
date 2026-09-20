import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n5r_gm-9k.css';
import '../../css/d/dkmh409em.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="n5r_gm-9k"/><path class="dkmh409em"/></g>`,
		"fallback": "reicon:lock-keyhole",
	});
}

export default Component;
