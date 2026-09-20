import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k21razc9o.css';
import '../../css/b/bsrwgvb7l.css';
import '../../css/h/h3ejo2vtm.css';
import '../../css/h/hbg1lt-er.css';
import '../../css/b/b2mv9isoi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k21razc9o"/><path class="bsrwgvb7l"/><path class="h3ejo2vtm"/><path class="hbg1lt-er"/><path class="b2mv9isoi"/></g>`,
		"fallback": "streamline-ultimate-color:water-dam",
	});
}

export default Component;
