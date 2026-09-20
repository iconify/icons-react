import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yqyyyybpj.css';
import '../../css/q/qdb3q2bfe.css';
import '../../css/u/u0t-u-bdx.css';
import '../../css/u/uyps3wbnh.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><g clip-rule="evenodd" class="d2kvgvbvc"><path class="yqyyyybpj"/><path class="qdb3q2bfe"/><path class="u0t-u-bdx"/><path class="uyps3wbnh"/></g><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-print:leave-circle-filled",
	});
}

export default Component;
