import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/ptterccrf.css';
import '../../css/r/r03_wcntn.css';
import '../../css/j/jxz8ntdgp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ptterccrf"/><path class="r03_wcntn"/><path clip-rule="evenodd" class="jxz8ntdgp"/></g>`,
		"fallback": "streamline-flex-color:layout-right-sidebar-flat",
	});
}

export default Component;
