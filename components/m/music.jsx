import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ntry5bc5r.css';
import '../../css/y/ybrt331fk.css';
import '../../css/d/d6vn-ssir.css';
import '../../css/q/qoyancbha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="ntry5bc5r"/><circle class="ybrt331fk"/><path class="d6vn-ssir"/><path class="qoyancbha"/></g>`,
		"fallback": "majesticons:music",
	});
}

export default Component;
