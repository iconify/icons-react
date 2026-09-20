import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/fp_yaaces.css';
import '../../css/p/pqg29e97u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="fp_yaaces"/><path class="pqg29e97u"/></g>`,
		"fallback": "keyline-icons:toggles-sharp-two-tone",
	});
}

export default Component;
