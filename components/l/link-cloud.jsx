import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/t2yy3v0xn.css';
import '../../css/w/wkepezrfx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="t2yy3v0xn"/><path class="wkepezrfx"/></g>`,
		"fallback": "icon-park:link-cloud",
	});
}

export default Component;
