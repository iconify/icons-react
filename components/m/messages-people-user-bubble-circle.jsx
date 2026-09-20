import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b3nfe8bcn.css';
import '../../css/y/y2784pb7o.css';
import '../../css/e/euy324mon.css';
import '../../css/u/u0y2x5bqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b3nfe8bcn"/><path class="y2784pb7o"/><path class="euy324mon"/><path class="u0y2x5bqg"/></g>`,
		"fallback": "streamline-ultimate-color:messages-people-user-bubble-circle",
	});
}

export default Component;
