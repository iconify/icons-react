import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzeuvdbtu.css';
import '../../css/v/vdoxwhb2d.css';
import '../../css/l/lc21qzuqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hzeuvdbtu"/><path class="vdoxwhb2d"/><path class="lc21qzuqt"/>`,
		"fallback": "solar:user-block-rounded-bold",
	});
}

export default Component;
