import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7vs37bmn.css';
import '../../css/t/t1-50l-2z.css';
import '../../css/e/e7avd0rgh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7vs37bmn"/><path class="t1-50l-2z"/><path class="e7avd0rgh"/>`,
		"fallback": "energy-icons:list-tree-48",
	});
}

export default Component;
