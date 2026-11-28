import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/brizay85j.css';
import '../../css/c/cfk9wnc2p.css';
import '../../css/r/rmepv_b3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="brizay85j"/><path class="cfk9wnc2p"/><path class="rmepv_b3s"/></g>`,
		"fallback": "iconaut:unfold-horizontal-duo",
	});
}

export default Component;
