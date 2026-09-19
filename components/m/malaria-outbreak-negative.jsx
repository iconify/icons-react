import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fi2wjab-j.css';
import '../../css/j/jipjiqbrr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsMalariaOutbreakNegative0)"><path clip-rule="evenodd" class="fi2wjab-j"/></g><defs><clipPath id="healthiconsMalariaOutbreakNegative0"><path class="jipjiqbrr"/></clipPath></defs></g>`,
		"fallback": "healthicons:malaria-outbreak-negative",
	});
}

export default Component;
