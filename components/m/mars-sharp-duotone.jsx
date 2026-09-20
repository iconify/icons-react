import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/lmrsucqff.css';
import '../../css/a/a5xy4h2vl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="lmrsucqff"/><path class="a5xy4h2vl"/></g>`,
		"fallback": "keyline-icons:mars-sharp-duotone",
	});
}

export default Component;
