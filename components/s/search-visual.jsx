import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/q/qbnfq_kql.css';
import '../../css/w/w3vn4_bvn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="qbnfq_kql"/><path class="w3vn4_bvn"/></g>`,
		"fallback": "streamline-plump:search-visual",
	});
}

export default Component;
