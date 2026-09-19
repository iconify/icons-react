import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jw2qqyvrp.css';
import '../../css/k/kuweadcxn.css';
import '../../css/a/au3i8qbhp.css';
import '../../css/b/bfb60nbvk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jw2qqyvrp"/><path class="kuweadcxn"/><path class="au3i8qbhp"/><path class="bfb60nbvk"/></g>`,
		"fallback": "icon-park:knife-fork",
	});
}

export default Component;
