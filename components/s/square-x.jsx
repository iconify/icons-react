import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kbzksu78q.css';
import '../../css/x/x0p9nsw8o.css';
import '../../css/n/nc_5sobzd.css';
import '../../css/v/vxg4k9b0f.css';
import '../../css/f/fwablvlop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kbzksu78q wm-k"/><path class="wm-k x0p9nsw8o"/><path class="nc_5sobzd wm-k"/><path class="vxg4k9b0f wm-shine"/><path class="fwablvlop wm-a"/></g>`,
		"fallback": "withicons-anime:square-x",
	});
}

export default Component;
