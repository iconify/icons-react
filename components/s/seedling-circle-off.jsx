import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/iv72-jbje.css';
import '../../css/g/gkcec9d0c.css';
import '../../css/k/k_xjaedzr.css';
import '../../css/j/jrthnwb6l.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><path class="iv72-jbje"/><path class="gkcec9d0c"/><path class="k_xjaedzr"/><path class="jrthnwb6l"/></g><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:seedling-circle-off",
	});
}

export default Component;
