import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rgfoldbay.css';
import '../../css/s/s39yyacxm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rgfoldbay"/><path class="s39yyacxm"/></g>`,
		"fallback": "streamline-plump-color:tree-1-flat",
	});
}

export default Component;
