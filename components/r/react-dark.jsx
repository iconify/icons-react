import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/x/xq_q36b2n.css';
import '../../css/f/f3weqj-8w.css';
import '../../css/q/qah-hrh_f.css';
import '../../css/l/l-qmr2bih.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path class="xq_q36b2n"/><path clip-rule="evenodd" class="f3weqj-8w"/><path clip-rule="evenodd" class="qah-hrh_f"/><path clip-rule="evenodd" class="l-qmr2bih"/></g>`,
		"fallback": "skill-icons:react-dark",
	});
}

export default Component;
