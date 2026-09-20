import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z9foj0s3t.css';
import '../../css/p/pw8f5c0fp.css';
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
		"content": `<g class="ipq1z-bjh"><path class="z9foj0s3t"/><path class="pw8f5c0fp"/><path class="r1arkdbrf"/><path class="dmlvqrbvi"/></g>`,
		"fallback": "solar:sale-square-linear",
	});
}

export default Component;
