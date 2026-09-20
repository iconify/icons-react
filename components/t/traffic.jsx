import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/onebhumps.css';
import '../../css/c/cznw79oxo.css';
import '../../css/l/lm4rjrbve.css';
import '../../css/c/c4i5gvurc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="onebhumps"/><path class="cznw79oxo"/><path class="lm4rjrbve"/><path class="c4i5gvurc"/></g>`,
		"fallback": "tdesign:traffic",
	});
}

export default Component;
