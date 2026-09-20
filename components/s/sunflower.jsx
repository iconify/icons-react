import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u859c9cal.css';
import '../../css/g/go49ebmmt.css';
import '../../css/l/lmvq5t7im.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/m/mrlprpr0f.css';
import '../../css/q/qe01dzbsx.css';
import '../../css/u/ugln7rbqp.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u859c9cal"/><circle class="go49ebmmt"/><path class="lmvq5t7im"/><g class="jn8qy4bru"><circle class="mrlprpr0f"/><path class="qe01dzbsx"/><path class="ugln7rbqp"/></g>`,
		"fallback": "openmoji:sunflower",
	});
}

export default Component;
