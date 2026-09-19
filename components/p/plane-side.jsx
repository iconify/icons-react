import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xqwo-k6fo.css';
import '../../css/b/bfexisiww.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xqwo-k6fo"/><path clip-rule="evenodd" class="bfexisiww"/></g>`,
		"fallback": "glyphs-poly:plane-side",
	});
}

export default Component;
