import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tn-v_jagy.css';
import '../../css/s/swlkb3bbi.css';
import '../../css/u/uoyt364kf.css';
import '../../css/q/qvrvgyy2t.css';
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
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="tn-v_jagy"/><path clip-rule="evenodd" class="swlkb3bbi"/><path clip-rule="evenodd" class="uoyt364kf"/><path clip-rule="evenodd" class="qvrvgyy2t"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:people-circle-off",
	});
}

export default Component;
