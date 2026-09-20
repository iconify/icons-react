import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmm_ovqpx.css';
import '../../css/b/bem6xnbwz.css';
import '../../css/y/yx9j9-c-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dmm_ovqpx"/><path clip-rule="evenodd" class="bem6xnbwz"/><path class="yx9j9-c-k"/>`,
		"fallback": "solar:sort-by-alphabet-bold-duotone",
	});
}

export default Component;
