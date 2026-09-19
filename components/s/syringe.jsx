import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h1r_qdb8a.css';
import '../../css/v/vk_avmbtr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="h1r_qdb8a"/><path class="vk_avmbtr"/></g>`,
		"fallback": "healthicons:syringe",
	});
}

export default Component;
