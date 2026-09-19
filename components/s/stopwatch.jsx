import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/w/wfx6i99th.css';
import '../../css/c/c-mvzrf4i.css';
import '../../css/t/tzqjbmi0a.css';
import '../../css/c/c654qko_k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="wfx6i99th"/><path class="c-mvzrf4i"/><path class="tzqjbmi0a"/><path class="c654qko_k"/></g>`,
		"fallback": "icon-park:stopwatch",
	});
}

export default Component;
