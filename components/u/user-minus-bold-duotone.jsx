import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8x_vkwlh.css';
import '../../css/l/lc21qzuqt.css';
import '../../css/v/v-gsn_r9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w8x_vkwlh"/><path class="lc21qzuqt"/><path class="v-gsn_r9a"/>`,
		"fallback": "solar:user-minus-bold-duotone",
	});
}

export default Component;
