import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/p/p058992qq.css';
import '../../css/v/v5mz4fu7n.css';
import '../../css/a/au-6fdb-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><circle class="p058992qq"/><path class="v5mz4fu7n"/><path class="au-6fdb-h"/></g>`,
		"fallback": "lets-icons:sad-alt-2-light",
	});
}

export default Component;
