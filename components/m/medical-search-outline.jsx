import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u1hksuw6h.css';
import '../../css/t/tzflvwb1v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="u1hksuw6h"/><path class="tzflvwb1v"/></g>`,
		"fallback": "healthicons:medical-search-outline",
	});
}

export default Component;
