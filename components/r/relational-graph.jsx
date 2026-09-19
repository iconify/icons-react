import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/x/xomm06-3t.css';
import '../../css/c/ch-hf4btb.css';
import '../../css/k/k-1wrccov.css';
import '../../css/t/t7ur9jl4t.css';
import '../../css/v/vmadbjhux.css';
import '../../css/j/jz1brkr3o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="xomm06-3t"/><path class="ch-hf4btb"/><path class="k-1wrccov"/><circle class="t7ur9jl4t"/><circle class="vmadbjhux"/><circle class="jz1brkr3o"/></g>`,
		"fallback": "icon-park-solid:relational-graph",
	});
}

export default Component;
