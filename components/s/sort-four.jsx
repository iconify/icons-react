import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/dwd849brd.css';
import '../../css/n/n0_9zqbwb.css';
import '../../css/p/pni55bcix.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="dwd849brd"/><path class="n0_9zqbwb"/><path class="pni55bcix"/></g>`,
		"fallback": "icon-park:sort-four",
	});
}

export default Component;
