import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/my6rj4b_w.css';
import '../../css/c/cw7c9mhiu.css';
import '../../css/k/kk6-mge6m.css';
import '../../css/t/tbtdffcfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="my6rj4b_w wm-k"/><path class="cw7c9mhiu wm-s"/><path class="kk6-mge6m"/><path class="tbtdffcfa"/></g>`,
		"fallback": "withicons-bauhaus:notebook-pen",
	});
}

export default Component;
