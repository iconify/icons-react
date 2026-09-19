import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/pw0h5xb-x.css';
import '../../css/a/arpc54blb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="pw0h5xb-x"/><circle class="arpc54blb"/></g>`,
		"fallback": "icon-park-outline:video-one",
	});
}

export default Component;
