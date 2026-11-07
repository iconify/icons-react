import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkhl62fff.css';
import '../../css/j/jftj_8bfk.css';
import '../../css/e/elc-1sb2u.css';
import '../../css/d/dq5_8vb3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkhl62fff"/><path class="jftj_8bfk"/><path class="elc-1sb2u"/><path clip-rule="evenodd" class="dq5_8vb3g"/>`,
		"fallback": "solar:ufo-2-outline",
	});
}

export default Component;
