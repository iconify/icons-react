import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/d2hs4ibec.css';
import '../../css/y/ycx7kra6s.css';
import '../../css/l/lt3r7j-6z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="d2hs4ibec"/><path class="ycx7kra6s"/><path class="lt3r7j-6z"/></g>`,
		"fallback": "streamline:orientation-portrait",
	});
}

export default Component;
