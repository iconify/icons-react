import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rkw1i4bzy.css';
import '../../css/v/v3s6c5b_h.css';
import '../../css/a/al6bhxbby.css';
import '../../css/i/i9y6cgbxw.css';
import '../../css/j/j3s6udbbw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rkw1i4bzy"/><path class="v3s6c5b_h"/><path class="al6bhxbby"/><path class="i9y6cgbxw"/><path class="j3s6udbbw"/></g>`,
		"fallback": "fluent-emoji-flat:ledger",
	});
}

export default Component;
