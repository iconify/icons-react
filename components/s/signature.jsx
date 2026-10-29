import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/folq6fdlx.css';
import '../../css/b/bvfvzcsqb.css';
import '../../css/l/lojmmxb0t.css';
import '../../css/f/futmjjb2m.css';
import '../../css/q/q_djmn9eq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="folq6fdlx wm-shadow"/><path class="bvfvzcsqb wm-k"/><path class="lojmmxb0t wm-k"/><path class="futmjjb2m wm-a"/><path class="q_djmn9eq wm-a"/>`,
		"fallback": "withicons-pastel:signature",
	});
}

export default Component;
