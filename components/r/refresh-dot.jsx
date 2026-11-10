import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e84ltdytn.css';
import '../../css/e/eawhonbnj.css';
import '../../css/x/x-f0osvuj.css';
import '../../css/f/fsl52hban.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="e84ltdytn"/><circle class="eawhonbnj"/><path class="x-f0osvuj"/><path class="fsl52hban"/></g>`,
		"fallback": "andrsrxn:refresh-dot",
	});
}

export default Component;
