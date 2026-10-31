import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/e0nu_o3vz.css';
import '../../css/f/fzphb_vzl.css';
import '../../css/s/sso3bmbos.css';
import '../../css/g/g58t-kfdz.css';
import '../../css/s/s_xc_dbyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="e0nu_o3vz wm-shadow"/><path class="fzphb_vzl wm-shadow"/><path class="sso3bmbos"/><path class="g58t-kfdz"/><path class="s_xc_dbyd wm-s"/></g>`,
		"fallback": "withicons-brutal:satellite-dish",
	});
}

export default Component;
