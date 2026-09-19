import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dpr6dv8_s.css';
import '../../css/t/tajt67buk.css';
import '../../css/q/quzlgsbvh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dpr6dv8_s"/><path class="tajt67buk"/><path class="quzlgsbvh"/></g>`,
		"fallback": "healthicons:lactose-free",
	});
}

export default Component;
