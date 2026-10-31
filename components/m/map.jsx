import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/tr3k9ebqe.css';
import '../../css/b/bsu4lubzw.css';
import '../../css/w/w47ymd4xc.css';
import '../../css/g/gk7n14bah.css';
import '../../css/e/ezsjerdiw.css';
import '../../css/n/n4h-uy5lc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="tr3k9ebqe wm-shadow"/><path class="bsu4lubzw"/><path class="w47ymd4xc"/><path class="gk7n14bah"/><path class="ezsjerdiw"/><path class="n4h-uy5lc"/></g>`,
		"fallback": "withicons-retro:map",
	});
}

export default Component;
