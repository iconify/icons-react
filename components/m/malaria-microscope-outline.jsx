import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dpr6dv8_s.css';
import '../../css/t/t8vgl7b5w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dpr6dv8_s"/><path class="t8vgl7b5w"/></g>`,
		"fallback": "healthicons:malaria-microscope-outline",
	});
}

export default Component;
