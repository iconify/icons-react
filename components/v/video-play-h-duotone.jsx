import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ib7p9gr-q.css';
import '../../css/b/bo5i6kvym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ib7p9gr-q"/><path class="bo5i6kvym"/></g>`,
		"fallback": "reicon:video-play-h-duotone",
	});
}

export default Component;
