import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/g-o9zhevq.css';
import '../../css/j/jh580j15b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="g-o9zhevq"/><path class="jh580j15b"/></g>`,
		"fallback": "icon-park-solid:spa-candle",
	});
}

export default Component;
