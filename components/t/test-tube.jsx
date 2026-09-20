import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/f/fo91v3b2u.css';
import '../../css/y/yh_orebxr.css';
import '../../css/b/bczv-dd1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="fo91v3b2u"/><path clip-rule="evenodd" class="yh_orebxr"/><path class="bczv-dd1h"/></g>`,
		"fallback": "streamline-sharp-color:test-tube",
	});
}

export default Component;
