import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/v/vjv8l4xni.css';
import '../../css/x/xvxr2ccse.css';
import '../../css/f/fh2f_ro8s.css';
import '../../css/j/jmo3_bb4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="vjv8l4xni"/><path class="xvxr2ccse"/><path class="fh2f_ro8s"/><path class="jmo3_bb4o"/></g>`,
		"fallback": "streamline-sharp-color:missed-call",
	});
}

export default Component;
