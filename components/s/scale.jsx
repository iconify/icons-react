import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/px_yz9bks.css';
import '../../css/p/pypt-jb3i.css';
import '../../css/y/y7h3tbrbg.css';
import '../../css/z/z1b2ktb9e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="px_yz9bks"/><path class="pypt-jb3i"/><path class="y7h3tbrbg"/><path class="z1b2ktb9e"/></g>`,
		"fallback": "icon-park:scale",
	});
}

export default Component;
