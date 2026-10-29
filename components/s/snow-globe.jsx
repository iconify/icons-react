import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rreb2h9kf.css';
import '../../css/h/hlq699b_b.css';
import '../../css/t/t3jkcci7j.css';
import '../../css/a/az98okbmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="rreb2h9kf wm-k"/><path class="hlq699b_b wm-a"/><path class="t3jkcci7j wm-k"/><path class="az98okbmb"/></g>`,
		"fallback": "withicons-bauhaus:snow-globe",
	});
}

export default Component;
