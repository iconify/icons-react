import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/stydbab6j.css';
import '../../css/k/k84t0ebpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="stydbab6j"/><rect class="k84t0ebpb"/></g>`,
		"fallback": "bitcoin-icons:sign-outline",
	});
}

export default Component;
