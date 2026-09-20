import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf89k6buf.css';
import '../../css/k/ksjxiodpt.css';
import '../../css/g/gughkpbfx.css';
import '../../css/b/brggc5baf.css';
import '../../css/o/o5ltvv6jc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wf89k6buf"/><path class="ksjxiodpt"/><path class="gughkpbfx"/><path class="brggc5baf"/><path class="o5ltvv6jc"/></g>`,
		"fallback": "solar:maximize-square-2-bold-duotone",
	});
}

export default Component;
