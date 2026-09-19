import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/trh37ib-k.css';
import '../../css/t/t79uieb2k.css';
import '../../css/t/tn0uqua-i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="trh37ib-k"/><path class="t79uieb2k"/><circle class="tn0uqua-i"/></g>`,
		"fallback": "icon-park-outline:slave",
	});
}

export default Component;
