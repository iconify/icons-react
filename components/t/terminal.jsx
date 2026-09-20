import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/d/dn_xbcb7g.css';
import '../../css/g/g9ew6e1fs.css';
import '../../css/p/ppsbne-ws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><rect class="dn_xbcb7g"/><path class="g9ew6e1fs"/><path class="ppsbne-ws"/></g>`,
		"fallback": "lets-icons:terminal",
	});
}

export default Component;
