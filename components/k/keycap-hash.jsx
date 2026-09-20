import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwr66yb9v.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/s/s5sv6wy0s.css';
import '../../css/m/m81_pzban.css';
import '../../css/z/zz220ac7q.css';
import '../../css/x/xn-ciab1l.css';
import '../../css/k/kjndr8bml.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwr66yb9v"/><g class="jn8qy4bru"><path class="s5sv6wy0s"/><path class="m81_pzban"/><path class="zz220ac7q"/><path class="xn-ciab1l"/><path class="kjndr8bml"/></g>`,
		"fallback": "openmoji:keycap-hash",
	});
}

export default Component;
