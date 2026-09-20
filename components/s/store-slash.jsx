import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-xgp5b4q.css';
import '../../css/r/r6x50u2cs.css';
import '../../css/l/li9lphqgm.css';
import '../../css/x/xpljl4lgm.css';
import '../../css/k/kj_m4hbga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-xgp5b4q"/><path class="r6x50u2cs"/><path class="li9lphqgm"/><path class="xpljl4lgm"/><path class="kj_m4hbga"/>`,
		"fallback": "uim:store-slash",
	});
}

export default Component;
