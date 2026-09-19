import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n09ay4b7z.css';
import '../../css/t/trv2yab-r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="n09ay4b7z"/><path class="trv2yab-r"/></g>`,
		"fallback": "healthicons:virus-lab-research-test-tube-outline",
	});
}

export default Component;
