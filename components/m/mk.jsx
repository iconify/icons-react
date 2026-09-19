import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qvaqk2etf.css';
import '../../css/j/jib11hzqb.css';
import '../../css/o/o-q_u7cjd.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qvaqk2etf"/><path class="jib11hzqb"/><circle class="o-q_u7cjd"/></g>`,
		"fallback": "cif:mk",
	});
}

export default Component;
