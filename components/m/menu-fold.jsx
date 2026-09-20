import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xrsfh6b9x.css';
import '../../css/t/t02i3cb1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xrsfh6b9x"/><path class="t02i3cb1m"/></g>`,
		"fallback": "tdesign:menu-fold",
	});
}

export default Component;
