import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m230b2b0n.css';
import '../../css/p/pg9gpuirh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m230b2b0n"/><path class="pg9gpuirh"/>`,
		"fallback": "energy-icons:sofa-48",
	});
}

export default Component;
