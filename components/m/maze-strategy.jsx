import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n47-ot0qp.css';
import '../../css/t/tvnge_b0t.css';
import '../../css/e/emix90b1a.css';
import '../../css/s/shky89sna.css';
import '../../css/q/qz10b5yrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n47-ot0qp"/><path class="tvnge_b0t"/><path class="emix90b1a"/><path class="shky89sna"/><path class="qz10b5yrs"/></g>`,
		"fallback": "streamline-ultimate-color:maze-strategy",
	});
}

export default Component;
