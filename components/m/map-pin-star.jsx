import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uw5ylwu1y.css';
import '../../css/z/zk6fj2bpn.css';
import '../../css/p/pltckst1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uw5ylwu1y"/><path class="zk6fj2bpn"/><path class="pltckst1x"/></g>`,
		"fallback": "tabler:map-pin-star",
	});
}

export default Component;
