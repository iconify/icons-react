import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/s0fh-2bqx.css';
import '../../css/b/b1e8v9bqo.css';
import '../../css/p/pk4k-ub1g.css';
import '../../css/b/b7klf4bqs.css';
import '../../css/i/ivrd6kbzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="s0fh-2bqx wm-shadow"/><path class="b1e8v9bqo"/><path class="pk4k-ub1g"/><path class="b7klf4bqs"/><path class="ivrd6kbzd"/></g>`,
		"fallback": "withicons-retro:navigation",
	});
}

export default Component;
