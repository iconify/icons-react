import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/c/cx89x0llr.css';
import '../../css/s/sb8ezhbjv.css';
import '../../css/d/dqjvr6s7b.css';
import '../../css/x/x5ghs4b5t.css';
import '../../css/o/omscwb-gq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="cx89x0llr"/><path class="sb8ezhbjv wm-shine"/><path class="dqjvr6s7b wm-k"/><path class="wm-a x5ghs4b5t"/><path class="omscwb-gq wm-deco"/></g>`,
		"fallback": "withicons-kawaii:package-open",
	});
}

export default Component;
