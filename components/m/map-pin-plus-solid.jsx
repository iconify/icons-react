import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cm--cvb2l.css';
import '../../css/g/gg1f4wbsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="cm--cvb2l"/><path class="gg1f4wbsx wm-s"/></g>`,
		"fallback": "withicons:map-pin-plus-solid",
	});
}

export default Component;
