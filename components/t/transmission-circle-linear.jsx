import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ijnvt0btl.css';
import '../../css/d/dtj43q5cf.css';
import '../../css/x/x02i6wbpa.css';
import '../../css/g/gshkn9qqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ijnvt0btl"/><path class="dtj43q5cf"/><path class="x02i6wbpa"/><path class="gshkn9qqt"/></g>`,
		"fallback": "solar:transmission-circle-linear",
	});
}

export default Component;
