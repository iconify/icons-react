import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dhsvhev9z.css';
import '../../css/x/x6tlt5s8q.css';
import '../../css/y/ykkyycbio.css';
import '../../css/n/n-y7-h-tz.css';
import '../../css/m/muvu13hjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dhsvhev9z"/><circle class="x6tlt5s8q"/><path class="ykkyycbio"/><path class="n-y7-h-tz"/><path class="muvu13hjo"/></g>`,
		"fallback": "solar:upload-track-2-broken",
	});
}

export default Component;
