import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/v_x0netdn.css';
import '../../css/o/ohqjceyzq.css';
import '../../css/u/uw1b0vb0b.css';
import '../../css/q/qibn-ebyb.css';
import '../../css/t/t6strnb3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="v_x0netdn"/><path class="ohqjceyzq"/><path class="uw1b0vb0b"/><path class="qibn-ebyb"/><path class="t6strnb3i"/></g>`,
		"fallback": "streamline-freehand-color:receipt-view-pricing",
	});
}

export default Component;
