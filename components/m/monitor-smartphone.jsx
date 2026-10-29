import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/j-r3y4bpj.css';
import '../../css/a/a-betpbxm.css';
import '../../css/g/g6wb46f2k.css';
import '../../css/k/k6dlw_agy.css';
import '../../css/m/m8xja5pyg.css';
import '../../css/i/igz_i_b6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="j-r3y4bpj wm-k"/><path class="a-betpbxm wm-k"/><path class="g6wb46f2k wm-s"/><path class="k6dlw_agy"/><path class="m8xja5pyg"/><path class="igz_i_b6w wm-s"/></g>`,
		"fallback": "withicons-bauhaus:monitor-smartphone",
	});
}

export default Component;
