import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnj89bbgy.css';
import '../../css/z/z1_dpab3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnj89bbgy"/><path clip-rule="evenodd" class="z1_dpab3r"/>`,
		"fallback": "solar:rounded-magnifier-zoom-in-bold",
	});
}

export default Component;
