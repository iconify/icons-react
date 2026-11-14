import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/ffz_sgboe.css';
import '../../css/f/fbdiwogxt.css';
import '../../css/a/a9auvsbwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ffz_sgboe"/><path class="fbdiwogxt"/><path class="a9auvsbwl"/></g>`,
		"fallback": "hugeicons:mail-secure-02",
	});
}

export default Component;
