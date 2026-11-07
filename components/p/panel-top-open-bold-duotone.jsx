import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2z1e_f9o.css';
import '../../css/n/nfjsi_b6n.css';
import '../../css/c/cn2waqbvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t2z1e_f9o"/><path class="nfjsi_b6n"/><path class="cn2waqbvb"/>`,
		"fallback": "solar:panel-top-open-bold-duotone",
	});
}

export default Component;
