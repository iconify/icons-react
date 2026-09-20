import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ccaahidjq.css';
import '../../css/f/fwdp9bc6y.css';
import '../../css/b/bmcg7dbut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ccaahidjq"/><path class="fwdp9bc6y"/><path clip-rule="evenodd" class="bmcg7dbut"/></g>`,
		"fallback": "solar:video-library-bold",
	});
}

export default Component;
