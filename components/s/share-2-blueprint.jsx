import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/nv9fz2cti.css';
import '../../css/w/w9-re23ay.css';
import '../../css/s/sdaucgb_l.css';
import '../../css/p/pg9_vdbco.css';
import '../../css/m/me05m18qz.css';
import '../../css/u/u9ezh4g5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="nv9fz2cti wm-deco"/><path class="w9-re23ay wm-deco"/><path class="sdaucgb_l wm-deco"/><path class="pg9_vdbco wm-k"/><path class="me05m18qz wm-a"/><path class="u9ezh4g5z wm-a"/></g>`,
		"fallback": "withicons:share-2-blueprint",
	});
}

export default Component;
