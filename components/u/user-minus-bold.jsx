import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rg261rb8a.css';
import '../../css/w/w8x_vkwlh.css';
import '../../css/l/lc21qzuqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rg261rb8a"/><path clip-rule="evenodd" class="w8x_vkwlh"/><path class="lc21qzuqt"/>`,
		"fallback": "solar:user-minus-bold",
	});
}

export default Component;
