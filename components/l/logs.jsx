import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/i/i_53qib5v.css';
import '../../css/a/alyt6hb2l.css';
import '../../css/e/euj49csjz.css';
import '../../css/f/fza9accym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="i_53qib5v"/><path class="alyt6hb2l wm-shine"/><path class="euj49csjz wm-k"/><path class="fza9accym wm-a"/></g>`,
		"fallback": "withicons-kawaii:logs",
	});
}

export default Component;
