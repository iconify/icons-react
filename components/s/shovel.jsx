import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/lxvqukbdn.css';
import '../../css/e/ed53m5bsg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="lxvqukbdn"/><rect class="ed53m5bsg"/></g>`,
		"fallback": "icon-park-outline:shovel",
	});
}

export default Component;
