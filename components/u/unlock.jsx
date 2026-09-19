import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/j/j9vg3_jgc.css';
import '../../css/s/skrettb2q.css';
import '../../css/h/hmcoah3hh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="j9vg3_jgc"/><path class="skrettb2q"/><path class="hmcoah3hh"/></g>`,
		"fallback": "icon-park:unlock",
	});
}

export default Component;
