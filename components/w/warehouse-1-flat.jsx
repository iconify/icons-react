import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q1_apsxgg.css';
import '../../css/c/c-y480ica.css';
import '../../css/t/txnm4xb_j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="q1_apsxgg"/><path clip-rule="evenodd" class="c-y480ica"/><path class="txnm4xb_j"/></g>`,
		"fallback": "streamline-plump-color:warehouse-1-flat",
	});
}

export default Component;
