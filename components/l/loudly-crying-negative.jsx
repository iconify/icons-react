import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m-bisxj3a.css';
import '../../css/z/z5687_-0x.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsLoudlyCryingNegative0)" clip-rule="evenodd" class="n1lsf0bnc"><path class="m-bisxj3a"/><path class="z5687_-0x"/></g><defs><clipPath id="healthiconsLoudlyCryingNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:loudly-crying-negative",
	});
}

export default Component;
