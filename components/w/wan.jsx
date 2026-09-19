import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/imhgw_b3f.css';
import '../../css/c/c_2ovccxd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="imhgw_b3f"/><path class="c_2ovccxd"/></g>`,
		"fallback": "cryptocurrency-color:wan",
	});
}

export default Component;
