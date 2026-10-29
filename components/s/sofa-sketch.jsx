import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zgprhql-v.css';
import '../../css/f/fvy03xbgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="zgprhql-v"/><path class="fvy03xbgi"/></g>`,
		"fallback": "withicons:sofa-sketch",
	});
}

export default Component;
