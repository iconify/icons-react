import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b-o6d68av.css';
import '../../css/e/efs6vvi9l.css';
import '../../css/p/p1q65gj8e.css';
import '../../css/s/sj84w633l.css';
import '../../css/t/tcq00dbec.css';
import '../../css/d/dxerausdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="b-o6d68av wm-shadow"/><path class="efs6vvi9l"/><path class="p1q65gj8e"/><path class="sj84w633l"/><path class="tcq00dbec"/><path class="dxerausdx"/></g>`,
		"fallback": "withicons-retro:toilet",
	});
}

export default Component;
