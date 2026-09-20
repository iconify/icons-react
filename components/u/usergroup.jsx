import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zbfkr_bbx.css';
import '../../css/i/itm0-ccgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zbfkr_bbx"/><path class="itm0-ccgn"/></g>`,
		"fallback": "tdesign:usergroup",
	});
}

export default Component;
