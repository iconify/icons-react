import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pf73k4bai.css';
import '../../css/g/gqb61cbma.css';
import '../../css/p/p4r57mjha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pf73k4bai"/><path class="gqb61cbma"/><path class="p4r57mjha"/></g>`,
		"fallback": "solar:signpost-line-duotone",
	});
}

export default Component;
