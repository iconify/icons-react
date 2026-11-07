import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzeuvdbtu.css';
import '../../css/l/lc21qzuqt.css';
import '../../css/b/ba30w5b_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hzeuvdbtu"/><path class="lc21qzuqt"/><path class="ba30w5b_d"/>`,
		"fallback": "solar:user-block-rounded-bold-duotone",
	});
}

export default Component;
