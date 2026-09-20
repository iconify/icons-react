import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uk7pvc6hp.css';
import '../../css/d/dln91fb9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uk7pvc6hp"/><path class="dln91fb9n"/></g>`,
		"fallback": "reicon:pin-hospital-duotone",
	});
}

export default Component;
