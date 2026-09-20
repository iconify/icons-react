import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/s/swfzs87sw.css';
import '../../css/m/mm2wvlxbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="swfzs87sw"/><path class="mm2wvlxbr"/></g>`,
		"fallback": "streamline-sharp-color:user-single-neutral-female",
	});
}

export default Component;
