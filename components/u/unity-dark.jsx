import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/s/s-7wn7q5o.css';
import '../../css/j/j01vhwb7x.css';
import '../../css/r/rc1zazbnp.css';
import '../../css/o/o_b8tf_8r.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path class="s-7wn7q5o"/><path class="j01vhwb7x"/><path class="rc1zazbnp"/><path class="o_b8tf_8r"/></g>`,
		"fallback": "skill-icons:unity-dark",
	});
}

export default Component;
