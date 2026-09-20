import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q1ym0lbfq.css';
import '../../css/l/lv0cpxu5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="q1ym0lbfq"/><path class="lv0cpxu5f"/></g>`,
		"fallback": "streamline-sharp-color:magnifying-glass-flat",
	});
}

export default Component;
