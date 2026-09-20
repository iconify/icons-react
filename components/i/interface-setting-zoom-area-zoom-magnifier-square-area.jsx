import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/g6xke3b1h.css';
import '../../css/g/g_xqm8rqg.css';
import '../../css/m/m7wu20bif.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="g6xke3b1h"/><circle class="g_xqm8rqg"/><path class="m7wu20bif"/></g>`,
		"fallback": "streamline:interface-setting-zoom-area-zoom-magnifier-square-area",
	});
}

export default Component;
