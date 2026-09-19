import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lqeh93bxb.css';
import '../../css/s/st8wzxn7b.css';
import '../../css/o/o52ps1b-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="map-pin-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="lqeh93bxb"/><path class="st8wzxn7b"/><path class="o52ps1b-i"/></g></g>`,
		"fallback": "cuida:map-pin-outline",
	});
}

export default Component;
