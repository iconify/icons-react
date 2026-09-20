import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qut0n4lgk.css';
import '../../css/b/b7de_v4rg.css';
import '../../css/x/xwi9-ibln.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><path class="qut0n4lgk"/><path class="b7de_v4rg"/><path class="xwi9-ibln"/></g><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:studio-light-side-off",
	});
}

export default Component;
