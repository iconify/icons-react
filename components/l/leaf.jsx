import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/m/mv2ksxb6o.css';
import '../../css/h/hxmvs7bhc.css';
import '../../css/p/pg6c6hbqu.css';
import '../../css/m/mp77goa1w.css';
import '../../css/f/fuo7qcb4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="mv2ksxb6o"/><path class="hxmvs7bhc wm-shine"/><path class="pg6c6hbqu wm-k"/><path class="mp77goa1w wm-a"/><path class="fuo7qcb4u wm-deco"/></g>`,
		"fallback": "withicons-kawaii:leaf",
	});
}

export default Component;
