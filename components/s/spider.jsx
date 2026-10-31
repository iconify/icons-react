import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/h1g5k9dga.css';
import '../../css/t/tjtq2bbog.css';
import '../../css/q/qgx8d9bmx.css';
import '../../css/g/gsp786r5p.css';
import '../../css/i/isvnfccbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="h1g5k9dga wm-shadow"/><path class="tjtq2bbog wm-shadow"/><path class="qgx8d9bmx"/><path class="gsp786r5p"/><path class="isvnfccbd wm-s"/></g>`,
		"fallback": "withicons-brutal:spider",
	});
}

export default Component;
