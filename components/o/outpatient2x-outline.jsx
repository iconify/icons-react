import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uh6c74scq.css';
import '../../css/v/virb-2skt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uh6c74scq"/><path class="virb-2skt"/></g>`,
		"fallback": "healthicons:outpatient2x-outline",
	});
}

export default Component;
