import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iuisc46tr.css';
import '../../css/s/stl-wtb-o.css';
import '../../css/a/av3m8fbrw.css';
import '../../css/g/ggljhkv3p.css';
import '../../css/s/srij2hbwk.css';
import '../../css/p/p4x5sk9nw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iuisc46tr"/><path class="stl-wtb-o"/><g class="av3m8fbrw"><path class="ggljhkv3p"/><path class="srij2hbwk"/></g><path class="p4x5sk9nw"/></g>`,
		"fallback": "tdesign:map-route-planning",
	});
}

export default Component;
