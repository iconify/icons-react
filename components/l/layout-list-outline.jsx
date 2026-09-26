import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jejtjfb2d.css';
import '../../css/v/vhbwzzl5c.css';
import '../../css/z/z9mb6ob-n.css';
import '../../css/a/a25lzkbjx.css';
import '../../css/c/cpsthybpp.css';
import '../../css/o/oblhbkbjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jejtjfb2d"/><path class="vhbwzzl5c"/><path class="z9mb6ob-n"/><path clip-rule="evenodd" class="a25lzkbjx"/><path class="cpsthybpp"/><path class="oblhbkbjv"/></g>`,
		"fallback": "solar:layout-list-outline",
	});
}

export default Component;
