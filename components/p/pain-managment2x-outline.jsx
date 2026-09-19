import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/otvne8t3z.css';
import '../../css/o/op8v5ubdf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="otvne8t3z"/><path class="op8v5ubdf"/></g>`,
		"fallback": "healthicons:pain-managment2x-outline",
	});
}

export default Component;
