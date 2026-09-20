import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsk8cohjr.css';
import '../../css/f/frfm2sm4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bsk8cohjr"/><path class="frfm2sm4s"/>`,
		"fallback": "lets-icons:upload",
	});
}

export default Component;
