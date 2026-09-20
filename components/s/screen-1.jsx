import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i6axgjb8x.css';
import '../../css/e/ekrazfehn.css';
import '../../css/p/puvo0nbjy.css';
import '../../css/u/uuk67hb_f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i6axgjb8x"/><path class="ekrazfehn"/><path class="puvo0nbjy"/><path class="uuk67hb_f"/></g>`,
		"fallback": "streamline-color:screen-1",
	});
}

export default Component;
