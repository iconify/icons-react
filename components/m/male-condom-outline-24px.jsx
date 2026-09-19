import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l3id-um2o.css';
import '../../css/d/d3wo74njw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="l3id-um2o"/><path class="d3wo74njw"/></g>`,
		"fallback": "healthicons:male-condom-outline-24px",
	});
}

export default Component;
