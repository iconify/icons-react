import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/f/fei-hofsh.css';
import '../../css/p/pe0smabhf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="fei-hofsh"/><path class="pe0smabhf"/></g>`,
		"fallback": "icon-park-solid:six-points",
	});
}

export default Component;
