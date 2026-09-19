import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/m/mqc9-db9x.css';
import '../../css/j/jrmgtoqee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="mqc9-db9x"/><path class="jrmgtoqee"/></g>`,
		"fallback": "hugeicons:lamp-floor",
	});
}

export default Component;
