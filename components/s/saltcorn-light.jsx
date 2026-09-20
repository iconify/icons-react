import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc_npxm2i.css';
import '../../css/n/nz0jllbgo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc_npxm2i"/><path class="nz0jllbgo"/>`,
		"fallback": "selfhst:saltcorn-light",
	});
}

export default Component;
