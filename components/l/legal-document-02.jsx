import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/p4nocrihx.css';
import '../../css/i/ig61lkb8h.css';
import '../../css/p/pqdm8be3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="p4nocrihx"/><path class="ig61lkb8h"/><path class="pqdm8be3y"/></g>`,
		"fallback": "hugeicons:legal-document-02",
	});
}

export default Component;
