import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/t/tk72zqtzu.css';
import '../../css/c/cxemjubfd.css';
import '../../css/s/slrjgubhg.css';
import '../../css/i/i1362ebiy.css';
import '../../css/k/k4dwu3bmh.css';
import '../../css/e/e3zcgqmiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="tk72zqtzu"/><path class="cxemjubfd"/></g><path class="slrjgubhg"/><path class="i1362ebiy"/><path class="k4dwu3bmh"/><path class="e3zcgqmiu"/></g>`,
		"fallback": "solar:test-tube-bold-duotone",
	});
}

export default Component;
