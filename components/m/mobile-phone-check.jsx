import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/p/pyh8mab9e.css';
import '../../css/l/lf_j62awi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="pyh8mab9e"/><path class="lf_j62awi"/></g>`,
		"fallback": "streamline-cyber:mobile-phone-check",
	});
}

export default Component;
