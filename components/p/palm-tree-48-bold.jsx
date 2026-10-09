import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfu98d8ng.css';
import '../../css/p/pdm5qacug.css';
import '../../css/a/a-9h4gbxm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfu98d8ng"/><path class="pdm5qacug"/><path class="a-9h4gbxm"/>`,
		"fallback": "energy-icons:palm-tree-48-bold",
	});
}

export default Component;
