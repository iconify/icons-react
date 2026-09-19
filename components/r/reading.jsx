import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m56mzhukz.css';
import '../../css/q/q5sauxgpz.css';
import '../../css/k/kwfvx1__p.css';
import '../../css/b/b6mu38bbk.css';
import '../../css/n/na0k8369x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m56mzhukz"/><path class="q5sauxgpz"/><g class="kwfvx1__p"><circle class="b6mu38bbk"/><path class="na0k8369x"/></g>`,
		"fallback": "flat-color-icons:reading",
	});
}

export default Component;
