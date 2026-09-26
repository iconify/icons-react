import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fj27cp7nx.css';
import '../../css/n/nwp387s1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fj27cp7nx"/><path class="nwp387s1b"/></g>`,
		"fallback": "solar:pin-circle-outline",
	});
}

export default Component;
