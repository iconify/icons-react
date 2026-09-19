import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m5htdeb_n.css';
import '../../css/s/sj52s7naf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="m5htdeb_n"/><path class="sj52s7naf"/></g>`,
		"fallback": "healthicons:naira-outline",
	});
}

export default Component;
