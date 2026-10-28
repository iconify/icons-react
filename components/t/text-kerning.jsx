import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k-rsyob2p.css';
import '../../css/l/ln__c5bfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k-rsyob2p"/><path class="ln__c5bfa"/></g>`,
		"fallback": "andrsrxn:text-kerning",
	});
}

export default Component;
