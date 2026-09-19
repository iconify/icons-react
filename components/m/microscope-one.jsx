import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/r4eb564mb.css';
import '../../css/c/c18re7vav.css';
import '../../css/n/njoak0bdt.css';
import '../../css/e/es9uiwbnk.css';
import '../../css/x/xb8_cbr0c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="r4eb564mb"/><path class="c18re7vav"/><path class="njoak0bdt"/><circle transform="rotate(45 26.041 22.042)" class="es9uiwbnk"/><path class="xb8_cbr0c"/></g>`,
		"fallback": "icon-park-solid:microscope-one",
	});
}

export default Component;
