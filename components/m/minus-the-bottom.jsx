import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/i6waueonu.css';
import '../../css/o/oofktvbua.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="i6waueonu"/><path class="oofktvbua"/></g>`,
		"fallback": "icon-park:minus-the-bottom",
	});
}

export default Component;
