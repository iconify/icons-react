import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp24w_8tf.css';
import '../../css/f/f8cpqdg_j.css';
import '../../css/u/ux2lhde9c.css';
import '../../css/t/t-b_8j6mv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sp24w_8tf"><path class="f8cpqdg_j"/><path class="ux2lhde9c"/><path class="t-b_8j6mv"/></g>`,
		"fallback": "icon-park:natural-mode",
	});
}

export default Component;
