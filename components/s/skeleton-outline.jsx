import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fc8avqbqo.css';
import '../../css/z/zutv_z9iz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fc8avqbqo"/><path class="zutv_z9iz"/></g>`,
		"fallback": "healthicons:skeleton-outline",
	});
}

export default Component;
