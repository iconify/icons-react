import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/nilpa4b3t.css';
import '../../css/a/aoccgcbcn.css';
import '../../css/k/k2au_xbxv.css';
import '../../css/g/gbaq1_boo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="nilpa4b3t wm-shadow"/><path class="aoccgcbcn wm-shadow"/><path class="k2au_xbxv"/><path class="gbaq1_boo"/></g>`,
		"fallback": "withicons-brutal:notebook",
	});
}

export default Component;
