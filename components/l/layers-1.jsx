import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/z/zfi_0j46e.css';
import '../../css/x/x4vdnyb5g.css';
import '../../css/k/k55plwnvr.css';
import '../../css/s/soldx753t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="zfi_0j46e"/><path class="x4vdnyb5g"/><path class="k55plwnvr"/><path class="soldx753t"/></g>`,
		"fallback": "streamline-sharp-color:layers-1",
	});
}

export default Component;
