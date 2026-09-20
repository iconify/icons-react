import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/m/m-b7e3zwk.css';
import '../../css/e/e56bymb3k.css';
import '../../css/q/q-vhqqbso.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="m-b7e3zwk"/><path class="e56bymb3k"/><path class="q-vhqqbso"/></g>`,
		"fallback": "streamline-plump-color:stroller",
	});
}

export default Component;
