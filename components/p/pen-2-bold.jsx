import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0g6pwobn.css';
import '../../css/c/cr3ha7_yx.css';
import '../../css/x/xq9y5i0nj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0g6pwobn"/><path class="cr3ha7_yx"/><path class="xq9y5i0nj"/>`,
		"fallback": "solar:pen-2-bold",
	});
}

export default Component;
