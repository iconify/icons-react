import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dtvqdnbgg.css';
import '../../css/t/t_gkyi4pk.css';
import '../../css/t/tbw9drmah.css';
import '../../css/t/twhj22bal.css';
import '../../css/l/l8bz6bbdc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dtvqdnbgg"/><path class="t_gkyi4pk"/><path class="tbw9drmah"/><path class="twhj22bal"/><path class="l8bz6bbdc"/></g>`,
		"fallback": "streamline-color:threat-folder",
	});
}

export default Component;
