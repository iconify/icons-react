import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnl2u0pbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnl2u0pbc"/>`,
		"fallback": "eos-icons:storage-class",
	});
}

export default Component;
