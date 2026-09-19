import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z99c8ob7e.css';
import '../../css/g/gznnjtadd.css';
import '../../css/i/isw356b6r.css';
import '../../css/i/isk97tscf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="z99c8ob7e"/><path class="gznnjtadd"/><path class="isw356b6r"/><path class="isk97tscf"/></g>`,
		"fallback": "hugeicons:soap-dispenser-droplet",
	});
}

export default Component;
