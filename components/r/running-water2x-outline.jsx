import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s6ger9b9f.css';
import '../../css/p/p380y-ozw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="s6ger9b9f"/><path class="p380y-ozw"/></g>`,
		"fallback": "healthicons:running-water2x-outline",
	});
}

export default Component;
