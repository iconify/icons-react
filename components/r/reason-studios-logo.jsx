import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/i/imdv_ebmd.css';
import '../../css/s/sxgmmi61m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="imdv_ebmd"/><path class="sxgmmi61m"/></g>`,
		"fallback": "streamline-logos:reason-studios-logo",
	});
}

export default Component;
