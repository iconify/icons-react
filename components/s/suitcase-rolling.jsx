import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/z/ziv-r07au.css';
import '../../css/p/payua2mep.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="ziv-r07au"/><path class="payua2mep"/></g>`,
		"fallback": "streamline-plump:suitcase-rolling",
	});
}

export default Component;
