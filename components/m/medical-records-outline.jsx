import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/er1k9fk4h.css';
import '../../css/o/otvne8t3z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="er1k9fk4h"/><path class="otvne8t3z"/></g>`,
		"fallback": "healthicons:medical-records-outline",
	});
}

export default Component;
