import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kky0_dk-t.css';
import '../../css/r/rxr6r4b-f.css';
import '../../css/j/j0y3tobst.css';
import '../../css/o/oaj58eb4c.css';
import '../../css/s/slxrl0bgr.css';
import '../../css/o/o2dd91b0l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kky0_dk-t"/><path class="rxr6r4b-f"/><path class="j0y3tobst"/><path class="oaj58eb4c"/><path class="slxrl0bgr"/><path class="o2dd91b0l"/></g>`,
		"fallback": "streamline-flex-color:star-badge",
	});
}

export default Component;
