import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qylfpj-0m.css';
import '../../css/b/b72bjykxz.css';
import '../../css/s/s7zkqqm5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qylfpj-0m"/><path class="b72bjykxz"/><path class="s7zkqqm5n"/></g>`,
		"fallback": "andrsrxn:star-off",
	});
}

export default Component;
