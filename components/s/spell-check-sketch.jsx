import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/iqxi9pbtv.css';
import '../../css/l/lrra40ljv.css';
import '../../css/k/ku4pnpblw.css';
import '../../css/m/mt--exbgb.css';
import '../../css/i/iln71zb0h.css';
import '../../css/o/o7p-pybex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="iqxi9pbtv wm-k"/><path class="lrra40ljv wm-a"/><path class="ku4pnpblw wm-s"/><path class="mt--exbgb wm-k"/><path class="iln71zb0h wm-a"/><path class="o7p-pybex wm-s"/></g>`,
		"fallback": "withicons:spell-check-sketch",
	});
}

export default Component;
