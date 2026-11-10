import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ns0m53bpb.css';
import '../../css/f/fkbewkbwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ns0m53bpb"/><path class="fkbewkbwy"/></g>`,
		"fallback": "andrsrxn:label",
	});
}

export default Component;
