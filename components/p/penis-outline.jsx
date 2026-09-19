import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wrno-r6ar.css';
import '../../css/o/obmvyzb5g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wrno-r6ar"/><path class="obmvyzb5g"/></g>`,
		"fallback": "healthicons:penis-outline",
	});
}

export default Component;
