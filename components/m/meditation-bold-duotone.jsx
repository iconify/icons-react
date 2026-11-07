import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfx_j7n7f.css';
import '../../css/a/avzi4zbdf.css';
import '../../css/c/c8ow5lbgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfx_j7n7f"/><path clip-rule="evenodd" class="avzi4zbdf"/><path class="c8ow5lbgf"/>`,
		"fallback": "solar:meditation-bold-duotone",
	});
}

export default Component;
