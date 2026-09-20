import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/r/r63xy_b1u.css';
import '../../css/k/kbk892lcj.css';
import '../../css/b/b7_3f9_2f.css';
import '../../css/e/e4416bb6r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="r63xy_b1u"/><path class="kbk892lcj"/><path class="b7_3f9_2f"/><path class="e4416bb6r"/></g>`,
		"fallback": "streamline-plump-color:medical-bag",
	});
}

export default Component;
