import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iiirhsbnc.css';
import '../../css/f/fsqj1k5yw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iiirhsbnc"/><path clip-rule="evenodd" class="fsqj1k5yw"/>`,
		"fallback": "basil:login-outline",
	});
}

export default Component;
