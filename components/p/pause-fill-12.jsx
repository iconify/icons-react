import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oll5m_usj.css';
import '../../css/b/br3ldgbts.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><rect class="oll5m_usj"/><rect class="br3ldgbts"/></g>`,
		"fallback": "garden:pause-fill-12",
	});
}

export default Component;
