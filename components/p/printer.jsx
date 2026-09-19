import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t_kb32k3h.css';
import '../../css/j/jyxm_h5-h.css';
import '../../css/r/r41lg8q7d.css';
import '../../css/u/u7ongxb8x.css';

const viewBox = {"width":42,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t_kb32k3h"/><path class="jyxm_h5-h"/><circle class="r41lg8q7d"/><circle class="u7ongxb8x"/></g>`,
		"fallback": "et:printer",
	});
}

export default Component;
