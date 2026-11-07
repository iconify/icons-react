import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/liywby_bb.css';
import '../../css/w/wkdbmdblf.css';
import '../../css/l/lc21qzuqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="liywby_bb"/><path class="wkdbmdblf"/><path class="lc21qzuqt"/>`,
		"fallback": "solar:user-block-bold",
	});
}

export default Component;
