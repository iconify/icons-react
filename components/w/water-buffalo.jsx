import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h85rwulue.css';
import '../../css/n/nz90xdize.css';
import '../../css/m/mdlurrbms.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/i/icskwmlta.css';
import '../../css/m/m3wm2gj9u.css';
import '../../css/h/h-38f_kjt.css';
import '../../css/g/g4bkelbdk.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h85rwulue"/><path class="nz90xdize"/><path class="mdlurrbms"/><g class="jn8qy4bru"><path class="icskwmlta"/><path class="m3wm2gj9u"/><path class="h-38f_kjt"/><path class="g4bkelbdk"/></g>`,
		"fallback": "openmoji:water-buffalo",
	});
}

export default Component;
