import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e2berc3wk.css';
import '../../css/i/iejh_l4xs.css';
import '../../css/i/ixw8vxb1o.css';
import '../../css/w/wcs_7orjo.css';
import '../../css/b/bbh3o_bou.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e2berc3wk"/><path class="iejh_l4xs"/><path class="ixw8vxb1o"/><path class="wcs_7orjo"/><path class="bbh3o_bou"/></g>`,
		"fallback": "streamline-color:local-storage-folder",
	});
}

export default Component;
