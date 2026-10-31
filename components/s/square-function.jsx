import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/p/pgteucbpt.css';
import '../../css/j/j1sbpxxao.css';
import '../../css/l/lg-8n1num.css';
import '../../css/e/eefbnzrzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="pgteucbpt"/><path class="j1sbpxxao wm-shine"/><path class="lg-8n1num wm-k"/><path class="eefbnzrzq wm-a"/></g>`,
		"fallback": "withicons-kawaii:square-function",
	});
}

export default Component;
