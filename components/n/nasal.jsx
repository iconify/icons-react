import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/l/lnaiokb6e.css';
import '../../css/p/pyj6a0gqj.css';
import '../../css/s/sok8u5bad.css';
import '../../css/q/qbgl5sb_b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="lnaiokb6e"/><path class="pyj6a0gqj"/><path class="sok8u5bad"/><path class="qbgl5sb_b"/></g>`,
		"fallback": "icon-park:nasal",
	});
}

export default Component;
