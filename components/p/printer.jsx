import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/s/s4uk_ibbx.css';
import '../../css/v/vu2z3zbex.css';
import '../../css/d/dm-ajb7yk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="s4uk_ibbx"/><path class="vu2z3zbex"/><path class="dm-ajb7yk"/></g>`,
		"fallback": "matita:printer",
	});
}

export default Component;
