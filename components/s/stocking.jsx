import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bx5v3rb8j.css';
import '../../css/t/t3b4xobiz.css';
import '../../css/r/rp7hkwb-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="bx5v3rb8j wm-k"/><path class="t3b4xobiz wm-a"/><path class="rp7hkwb-v"/></g>`,
		"fallback": "withicons-bauhaus:stocking",
	});
}

export default Component;
