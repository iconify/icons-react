import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-ec6nb8h.css';
import '../../css/d/dtlzvx9dw.css';
import '../../css/o/o8myxnbyd.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/z/zvlp41bor.css';
import '../../css/e/el7kd0g5t.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-ec6nb8h"/><path class="dtlzvx9dw"/><path class="o8myxnbyd"/><g class="jn8qy4bru"><path class="zvlp41bor"/><path class="el7kd0g5t"/></g>`,
		"fallback": "openmoji:pepper-mill",
	});
}

export default Component;
