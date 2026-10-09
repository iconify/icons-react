import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvggpac7z.css';
import '../../css/b/bc_ez0bdz.css';
import '../../css/n/n4fi8-cmm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvggpac7z"/><path class="bc_ez0bdz"/><path class="n4fi8-cmm"/>`,
		"fallback": "energy-icons:retrofit-48",
	});
}

export default Component;
