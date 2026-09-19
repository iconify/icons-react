import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hnwz0hxej.css';
import '../../css/s/sg4ntioqf.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsMalariaPvMicroscopeNegative0)" clip-rule="evenodd" class="n1lsf0bnc"><path class="hnwz0hxej"/><path class="sg4ntioqf"/></g><defs><clipPath id="healthiconsMalariaPvMicroscopeNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:malaria-pv-microscope-negative",
	});
}

export default Component;
