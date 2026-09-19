import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn55ge7zx.css';
import '../../css/p/pyk3u23xc.css';
import '../../css/m/mrpnast4z.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tn55ge7zx"><path class="pyk3u23xc"/><path class="mrpnast4z"/></g>`,
		"fallback": "glyphs:user-bold",
	});
}

export default Component;
