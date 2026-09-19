import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/rgdtn1b6r.css';
import '../../css/c/c96bn9bfp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><circle class="rgdtn1b6r"/><path class="c96bn9bfp"/></g>`,
		"fallback": "icon-park-outline:user-positioning",
	});
}

export default Component;
