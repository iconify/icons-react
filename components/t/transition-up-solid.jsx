import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqa3tkb1n.css';
import '../../css/m/m6mkx_g-s.css';
import '../../css/k/kfv6gqbpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="m6mkx_g-s"/><path class="kfv6gqbpd"/></g>`,
		"fallback": "iconoir:transition-up-solid",
	});
}

export default Component;
