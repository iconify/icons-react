import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/r5fs5gbsr.css';
import '../../css/c/cjkvecb0a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><rect transform="rotate(45 24.762 3.243)" class="r5fs5gbsr"/><path class="cjkvecb0a"/></g>`,
		"fallback": "icon-park-outline:tray",
	});
}

export default Component;
