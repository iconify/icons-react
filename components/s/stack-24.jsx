import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg_zrkbvf.css';
import '../../css/j/j525vvb7b.css';
import '../../css/s/s9rtedbwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg_zrkbvf"/><path class="j525vvb7b"/><path class="s9rtedbwj"/>`,
		"fallback": "octicon:stack-24",
	});
}

export default Component;
