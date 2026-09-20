import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jd71xmb_q.css';
import '../../css/u/u3b5gcbim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jd71xmb_q"/><path class="u3b5gcbim"/></g>`,
		"fallback": "tdesign:tree-round-dot-vertical",
	});
}

export default Component;
