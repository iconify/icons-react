import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gg8uz8fus.css';
import '../../css/h/harhmhohv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gg8uz8fus"/><path class="harhmhohv"/></g>`,
		"fallback": "healthicons:tb2x-outline",
	});
}

export default Component;
