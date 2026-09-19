import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/towkzaczv.css';
import '../../css/u/u25imsb3l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="towkzaczv"/><path class="u25imsb3l"/></g>`,
		"fallback": "icon-park-outline:play-once",
	});
}

export default Component;
