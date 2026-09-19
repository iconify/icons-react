import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy3p094dk.css';
import '../../css/j/j_7wf_9wv.css';
import '../../css/d/dk5jy9x_q.css';
import '../../css/m/mf_n5zbhj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy3p094dk"/><path class="j_7wf_9wv"/><path class="dk5jy9x_q"/><path class="mf_n5zbhj"/>`,
		"fallback": "carbon:stress-breath-editor",
	});
}

export default Component;
