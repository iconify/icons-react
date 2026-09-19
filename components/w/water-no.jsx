import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/y/y9e39hbzc.css';
import '../../css/d/de0sabcdg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="y9e39hbzc"/><path class="de0sabcdg"/></g>`,
		"fallback": "icon-park-solid:water-no",
	});
}

export default Component;
