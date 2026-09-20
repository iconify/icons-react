import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t9fh2erkx.css';
import '../../css/n/nd7aurbbb.css';
import '../../css/j/jl-5_5u-u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t9fh2erkx"/><path clip-rule="evenodd" class="nd7aurbbb"/><path class="jl-5_5u-u"/></g>`,
		"fallback": "streamline-plump-color:target-3-flat",
	});
}

export default Component;
