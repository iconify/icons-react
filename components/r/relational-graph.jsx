import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/x/xomm06-3t.css';
import '../../css/c/ch-hf4btb.css';
import '../../css/k/k-1wrccov.css';
import '../../css/l/lwldt_2zh.css';
import '../../css/g/glm679b9z.css';
import '../../css/n/n6omk5bmd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="xomm06-3t"/><path class="ch-hf4btb"/><path class="k-1wrccov"/><circle class="lwldt_2zh"/><circle class="glm679b9z"/><circle class="n6omk5bmd"/></g>`,
		"fallback": "icon-park-outline:relational-graph",
	});
}

export default Component;
