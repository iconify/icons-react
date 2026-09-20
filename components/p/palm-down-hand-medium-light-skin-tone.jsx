import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-0t01s5i.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/v/v9kf0xb2s.css';
import '../../css/q/qizxgf4ut.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-0t01s5i"/><g class="jn8qy4bru"><path class="v9kf0xb2s"/><path class="qizxgf4ut"/></g>`,
		"fallback": "openmoji:palm-down-hand-medium-light-skin-tone",
	});
}

export default Component;
