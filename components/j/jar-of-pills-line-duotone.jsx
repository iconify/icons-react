import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f3p-g4m6q.css';
import '../../css/q/qj0qu-5ec.css';
import '../../css/f/f-d2l1b3s.css';
import '../../css/u/untnup1qs.css';
import '../../css/h/hpzuy57gm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f3p-g4m6q"/><path class="qj0qu-5ec"/><path class="f-d2l1b3s"/><path class="untnup1qs"/><path class="hpzuy57gm"/></g>`,
		"fallback": "solar:jar-of-pills-line-duotone",
	});
}

export default Component;
