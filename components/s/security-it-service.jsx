import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/e05xtxd5b.css';
import '../../css/k/krxcl4xgx.css';
import '../../css/z/zps3a9brs.css';
import '../../css/g/gr3pn8_ar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="e05xtxd5b"/><path class="krxcl4xgx"/><path class="zps3a9brs"/><path class="gr3pn8_ar"/></g>`,
		"fallback": "streamline-freehand-color:security-it-service",
	});
}

export default Component;
