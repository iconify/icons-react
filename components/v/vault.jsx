import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yq5t_gbte.css';
import '../../css/z/zux7ngbgx.css';
import '../../css/g/g_r8w1hkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="yq5t_gbte"/><path class="zux7ngbgx"/><path class="g_r8w1hkk"/></g>`,
		"fallback": "withicons-bauhaus:vault",
	});
}

export default Component;
