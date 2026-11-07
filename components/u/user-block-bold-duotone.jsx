import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/liywby_bb.css';
import '../../css/l/lc21qzuqt.css';
import '../../css/s/swt82ccqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="liywby_bb"/><path class="lc21qzuqt"/><path class="swt82ccqb"/>`,
		"fallback": "solar:user-block-bold-duotone",
	});
}

export default Component;
