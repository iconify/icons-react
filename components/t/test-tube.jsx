import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f_ldg-byp.css';
import '../../css/y/yul9ztbjl.css';
import '../../css/o/oupu01uge.css';
import '../../css/t/t3gv5o5lv.css';
import '../../css/o/ogxgaobjd.css';
import '../../css/b/b292z2-qu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f_ldg-byp wm-k"/><path class="wm-k yul9ztbjl"/><path class="oupu01uge wm-k"/><path class="t3gv5o5lv wm-shine"/><path class="ogxgaobjd wm-k"/><path class="b292z2-qu wm-a"/></g>`,
		"fallback": "withicons-anime:test-tube",
	});
}

export default Component;
