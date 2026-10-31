import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nize2cc_h.css';
import '../../css/n/ndzszkbcg.css';
import '../../css/u/urzhw0bem.css';
import '../../css/q/qhof2qz4d.css';
import '../../css/u/u3ijpsbvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="nize2cc_h wm-shadow"/><path class="ndzszkbcg"/><path class="urzhw0bem"/><path class="qhof2qz4d"/><path class="u3ijpsbvb"/></g>`,
		"fallback": "withicons-retro:pen-line",
	});
}

export default Component;
