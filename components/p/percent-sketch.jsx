import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/teiclfxwa.css';
import '../../css/k/ki722bqyl.css';
import '../../css/o/oaan660fk.css';
import '../../css/a/a-cpzbx-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="teiclfxwa"/><path class="ki722bqyl wm-k"/><path class="oaan660fk wm-k"/><path class="a-cpzbx-q wm-a"/></g>`,
		"fallback": "withicons:percent-sketch",
	});
}

export default Component;
