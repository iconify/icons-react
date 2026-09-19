import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5o54xhzc.css';
import '../../css/l/lob8-1bfv.css';
import '../../css/x/xo8hlacyi.css';
import '../../css/r/r6o6r4bvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5o54xhzc"/><path class="lob8-1bfv"/><path class="xo8hlacyi"/><path class="r6o6r4bvb"/>`,
		"fallback": "cil:vertical-align-top1",
	});
}

export default Component;
