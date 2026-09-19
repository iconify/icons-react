import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/jhawqmbyu.css';
import '../../css/o/op25h3b0z.css';
import '../../css/q/q53vh1vwi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="jhawqmbyu"/><path class="op25h3b0z"/><path class="q53vh1vwi"/></g>`,
		"fallback": "icon-park-outline:tiger-zodiac",
	});
}

export default Component;
