import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/d/d_u0cwbmf.css';
import '../../css/d/d3atdsbgl.css';
import '../../css/h/h4bucjbeq.css';
import '../../css/l/lc8k0r_ox.css';
import '../../css/y/y3b2hfbld.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="d_u0cwbmf"/><path class="d3atdsbgl"/><path class="h4bucjbeq"/><path class="lc8k0r_ox"/><path class="y3b2hfbld"/></g>`,
		"fallback": "icon-park:measuring-cup",
	});
}

export default Component;
