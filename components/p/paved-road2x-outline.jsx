import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t5mki6khn.css';
import '../../css/t/teawubc8w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="t5mki6khn"/><path class="teawubc8w"/></g>`,
		"fallback": "healthicons:paved-road2x-outline",
	});
}

export default Component;
