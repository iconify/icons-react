import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g0gwmtuhx.css';
import '../../css/m/mzapnymll.css';
import '../../css/b/b4n95wz2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(90 21.25 14.65)" class="g0gwmtuhx"/><rect transform="rotate(90 21.25 2.74)" class="mzapnymll"/><path class="b4n95wz2p"/></g>`,
		"fallback": "andrsrxn:panel-bottom",
	});
}

export default Component;
