import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd1qm_b3a.css';
import '../../css/y/yazvhwbdd.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/n/nzou8ob_j.css';
import '../../css/g/gmr0k3f_y.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd1qm_b3a"/><path class="yazvhwbdd"/><g class="jn8qy4bru"><path class="nzou8ob_j"/><path class="gmr0k3f_y"/></g>`,
		"fallback": "openmoji:open-file-folder",
	});
}

export default Component;
