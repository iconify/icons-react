import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c6_oytiam.css';
import '../../css/z/z9foj0s3t.css';
import '../../css/r/r1arkdbrf.css';
import '../../css/d/dmlvqrbvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c6_oytiam"/><path class="z9foj0s3t"/><path class="r1arkdbrf"/><path class="dmlvqrbvi"/></g>`,
		"fallback": "solar:ticket-sale-linear",
	});
}

export default Component;
