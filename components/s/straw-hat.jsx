import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/c/c4k5scc4t.css';
import '../../css/k/k3_t4cbov.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="c4k5scc4t"/><path class="k3_t4cbov"/></g>`,
		"fallback": "icon-park-outline:straw-hat",
	});
}

export default Component;
