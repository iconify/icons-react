import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rqmz7ibzg.css';
import '../../css/p/pq1qj02kb.css';
import '../../css/p/pj_stctjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rqmz7ibzg"/><path class="pq1qj02kb"/><path class="pj_stctjb"/></g>`,
		"fallback": "streamline-ultimate-color:login-key",
	});
}

export default Component;
