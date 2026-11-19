import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lctctxbeg.css';
import '../../css/b/b6tr8jbnr.css';
import '../../css/c/ckgdd6qfc.css';
import '../../css/n/nnryslbng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lctctxbeg"/><path class="b6tr8jbnr"/><path class="ckgdd6qfc"/><path class="nnryslbng"/></g>`,
		"fallback": "andrsrxn:lightbulb-question",
	});
}

export default Component;
