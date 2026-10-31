import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/t/t0x4sj40f.css';
import '../../css/g/glt6q1bcl.css';
import '../../css/s/spqppbh5d.css';
import '../../css/s/sw9h8e1mf.css';
import '../../css/y/y64zqrxgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="t0x4sj40f"/><path class="glt6q1bcl wm-shine"/><path class="spqppbh5d wm-k"/><path class="sw9h8e1mf wm-a"/><path class="wm-deco y64zqrxgb"/></g>`,
		"fallback": "withicons-kawaii:pen-line",
	});
}

export default Component;
