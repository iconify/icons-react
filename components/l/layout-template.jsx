import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/n/neal2n4_m.css';
import '../../css/o/oltwzvb9y.css';
import '../../css/c/c_w8saclo.css';
import '../../css/t/txj5lrrof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="neal2n4_m"/><path class="oltwzvb9y wm-shine"/><path class="c_w8saclo wm-k"/><path class="txj5lrrof wm-a"/></g>`,
		"fallback": "withicons-kawaii:layout-template",
	});
}

export default Component;
