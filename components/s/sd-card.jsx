import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tr84mtbdf.css';
import '../../css/m/mlsyujbel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tr84mtbdf"/><path class="mlsyujbel"/></g>`,
		"fallback": "andrsrxn:sd-card",
	});
}

export default Component;
