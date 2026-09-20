import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/q/q3qnc6bjm.css';
import '../../css/k/k8t4rebbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="q3qnc6bjm"/><path class="k8t4rebbh"/></g>`,
		"fallback": "streamline-sharp-color:symmetry-mirror-1",
	});
}

export default Component;
