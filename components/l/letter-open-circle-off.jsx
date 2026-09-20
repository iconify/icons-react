import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/maaum7bvf.css';
import '../../css/k/kzdconb-v.css';
import '../../css/i/i9k0b6btm.css';
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
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="maaum7bvf"/><path clip-rule="evenodd" class="kzdconb-v"/><path clip-rule="evenodd" class="i9k0b6btm"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:letter-open-circle-off",
	});
}

export default Component;
