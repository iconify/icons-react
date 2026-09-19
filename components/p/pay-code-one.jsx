import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/iyg5_ubmc.css';
import '../../css/d/d1ny5kbfu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="iyg5_ubmc"/><path class="d1ny5kbfu"/></g>`,
		"fallback": "icon-park-solid:pay-code-one",
	});
}

export default Component;
