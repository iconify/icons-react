import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b8z23pe4m.css';
import '../../css/j/j6nfug34l.css';
import '../../css/v/v2h-64b7s.css';
import '../../css/h/h0y1y9b6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b8z23pe4m"/><path class="j6nfug34l"/><path class="v2h-64b7s"/><path class="h0y1y9b6a"/></g>`,
		"fallback": "tdesign:play-demo",
	});
}

export default Component;
