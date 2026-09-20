import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t88-slbry.css';
import '../../css/t/tg_zukb1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t88-slbry"/><path class="tg_zukb1k"/></g>`,
		"fallback": "tdesign:layout",
	});
}

export default Component;
