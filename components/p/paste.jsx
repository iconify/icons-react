import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/r/r4c8mnv3b.css';
import '../../css/e/epwrxfrqm.css';
import '../../css/t/t1hkudb-d.css';
import '../../css/w/wp31-1bdq.css';
import '../../css/k/klzcy0ogc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="r4c8mnv3b"/><path class="epwrxfrqm wm-shine"/><path class="t1hkudb-d wm-k"/><path class="wm-a wp31-1bdq"/><path class="klzcy0ogc wm-deco"/></g>`,
		"fallback": "withicons-kawaii:paste",
	});
}

export default Component;
