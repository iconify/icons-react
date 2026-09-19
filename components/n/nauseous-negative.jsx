import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vmpk0sw3n.css';
import '../../css/z/zet8cs70p.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsNauseousNegative0)" clip-rule="evenodd" class="n1lsf0bnc"><path class="vmpk0sw3n"/><path class="zet8cs70p"/></g><defs><clipPath id="healthiconsNauseousNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:nauseous-negative",
	});
}

export default Component;
