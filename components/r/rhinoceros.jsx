import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jm4hit5_e.css';
import '../../css/o/o8xix7r3p.css';
import '../../css/x/x78zr8bun.css';
import '../../css/h/hfj-xzgcq.css';
import '../../css/p/p6nmatbyj.css';
import '../../css/b/bueqq2vrf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jm4hit5_e"/><path class="o8xix7r3p"/><path class="x78zr8bun"/><path class="hfj-xzgcq"/><path class="p6nmatbyj"/><path class="bueqq2vrf"/></g>`,
		"fallback": "fluent-emoji-flat:rhinoceros",
	});
}

export default Component;
