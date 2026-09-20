import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/c/csrkrnb5y.css';
import '../../css/l/lsxguc_1v.css';
import '../../css/d/di80acbxg.css';
import '../../css/x/x__-1cckh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="csrkrnb5y"/><path class="lsxguc_1v"/></g><path class="di80acbxg"/><path class="x__-1cckh"/></g>`,
		"fallback": "solar:map-bold-duotone",
	});
}

export default Component;
