import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/ds5knutre.css';
import '../../css/x/xvm4iyb8l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ds5knutre"/><path class="xvm4iyb8l"/></g>`,
		"fallback": "healthicons:running2x-outline",
	});
}

export default Component;
