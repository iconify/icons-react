import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/k/k0r1-bpyg.css';
import '../../css/t/t1zv-t2di.css';
import '../../css/k/k0qs90g5y.css';
import '../../css/o/oi2egebiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="k0r1-bpyg wm-k"/><path class="t1zv-t2di wm-a"/><path class="k0qs90g5y wm-s"/><path class="oi2egebiq wm-deco"/></g>`,
		"fallback": "withicons-kawaii:spell-check",
	});
}

export default Component;
