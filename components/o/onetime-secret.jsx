import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpazd_-xr.css';
import '../../css/s/sn42oqj_q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpazd_-xr"/><path class="sn42oqj_q"/>`,
		"fallback": "selfhst:onetime-secret",
	});
}

export default Component;
