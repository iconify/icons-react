import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/at38f-blc.css';
import '../../css/s/s5220ct4r.css';
import '../../css/b/bukkqxu-l.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="at38f-blc"/><path class="s5220ct4r"/><path class="bukkqxu-l"/></g>`,
		"fallback": "flag:sl-4x3",
	});
}

export default Component;
